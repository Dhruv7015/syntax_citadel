from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required, get_jwt_identity
)
from model import db, User, Progress, Activity
from dotenv import load_dotenv
from datetime import datetime, timezone, timedelta, date
from sqlalchemy.exc import IntegrityError
import os

load_dotenv()

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL", "sqlite:///app.db")
app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_SECRET_KEY", "dev-secret-change-this")

db.init_app(app)
jwt = JWTManager(app)
CORS(app, origins=[os.environ.get("FRONTEND_URL", "http://localhost:3000")], supports_credentials=True)

with app.app_context():
    db.create_all()

MAX_LIVES = 5
LIFE_REGEN_HOURS = 4

def regenerate_lives(user):
    if user.lives >= MAX_LIVES:
        user.last_life_regen_at = datetime.now(timezone.utc)
        return

    now = datetime.now(timezone.utc)
    last = user.last_life_regen_at
    if last.tzinfo is None:
        last = last.replace(tzinfo=timezone.utc)

    elapsed = now - last
    regen_count = int(elapsed / timedelta(hours=LIFE_REGEN_HOURS))

    if regen_count > 0:
        user.lives = min(MAX_LIVES, user.lives + regen_count)
        user.last_life_regen_at = last + timedelta(hours=LIFE_REGEN_HOURS * regen_count)
        if user.lives >= MAX_LIVES:
            user.last_life_regen_at = now

def update_streak_on_login(user):
    """Calendar-day based, like LeetCode: one login per day counts, missing a full day resets to 0."""
    today = date.today()

    if user.last_login_date == today:
        return  # already logged in today, no change

    if user.last_login_date == today - timedelta(days=1):
        user.streak += 1
    else:
        user.streak = 1  # first login, or a day (or more) was missed

    user.last_login_date = today

    exists = Activity.query.filter_by(user_id=user.id, activity_date=today).first()
    if not exists:
        db.session.add(Activity(user_id=user.id, activity_date=today))
        try:
            db.session.flush()
        except IntegrityError:
            db.session.rollback()

@app.post("/api/register")
def register():
    data = request.get_json()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "")

    if not email or not password:
        return jsonify({"error": "Email and password required"}), 400
    if len(password) < 8:
        return jsonify({"error": "Password must be at least 8 characters"}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already registered"}), 409

    user = User(email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    update_streak_on_login(user)
    db.session.commit()

    token = create_access_token(identity=str(user.id))
    return jsonify({"token": token, "email": user.email}), 201

@app.post("/api/login")
def login():
    data = request.get_json()
    email = data.get("email", "").strip().lower()
    password = data.get("password", "")

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"error": "Invalid email or password"}), 401

    update_streak_on_login(user)
    db.session.commit()

    token = create_access_token(identity=str(user.id))
    return jsonify({"token": token, "email": user.email})

@app.get("/api/me")
@jwt_required()
def me():
    user = User.query.get(get_jwt_identity())
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify({"id": user.id, "email": user.email})

@app.get("/api/progress")
@jwt_required()
def get_progress():
    user = User.query.get(get_jwt_identity())
    if not user:
        return jsonify({"error": "User not found"}), 404

    regenerate_lives(user)
    db.session.commit()

    solved = Progress.query.filter_by(user_id=user.id, solved=True).all()
    return jsonify({
        "lives": user.lives,
        "streak": user.streak,
        "points": user.points,
        "solved": [
            {"world": p.world, "level": p.level, "questionId": p.question_id}
            for p in solved
        ],
    })

@app.get("/api/activity")
@jwt_required()
def get_activity():
    user_id = get_jwt_identity()
    year = request.args.get("year", type=int) or date.today().year
    month = request.args.get("month", type=int) or date.today().month

    rows = Activity.query.filter_by(user_id=user_id).all()
    dates = [
        r.activity_date.isoformat()
        for r in rows
        if r.activity_date.year == year and r.activity_date.month == month
    ]
    return jsonify({"year": year, "month": month, "activeDates": dates})

@app.post("/api/progress/solve")
@jwt_required()
def mark_solved():
    user_id = get_jwt_identity()
    data = request.get_json()
    world, level, question_id = data.get("world"), data.get("level"), data.get("questionId")

    if not all([world, level, question_id]):
        return jsonify({"error": "world, level, and questionId required"}), 400

    existing = Progress.query.filter_by(
        user_id=user_id, world=world, level=level, question_id=question_id
    ).first()

    if not existing:
        db.session.add(Progress(
            user_id=user_id, world=world, level=level,
            question_id=question_id, solved=True
        ))
        user = User.query.get(user_id)
        user.points += 100
        db.session.commit()

    return jsonify({"success": True})

@app.post("/api/lives/lose")
@jwt_required()
def lose_life():
    user = User.query.get(get_jwt_identity())
    if not user:
        return jsonify({"error": "User not found"}), 404

    regenerate_lives(user)

    if user.lives > 0:
        user.lives -= 1

    db.session.commit()
    return jsonify({"lives": user.lives})

if __name__ == "__main__":
    app.run(debug=True, port=5000)