from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timezone

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    lives = db.Column(db.Integer, default=5)
    streak = db.Column(db.Integer, default=0)
    points = db.Column(db.Integer, default=0)
    last_life_regen_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    last_login_date = db.Column(db.Date, nullable=True)

    def set_password(self, pw):
        self.password_hash = generate_password_hash(pw)

    def check_password(self, pw):
        return check_password_hash(self.password_hash, pw)

class Progress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    world = db.Column(db.String(50), nullable=False)
    level = db.Column(db.Integer, nullable=False)
    question_id = db.Column(db.String(10), nullable=False)
    solved = db.Column(db.Boolean, default=False)

    __table_args__ = (db.UniqueConstraint("user_id", "world", "level", "question_id"),)

class Activity(db.Model):
    """One row per user per calendar date they logged in. Powers the streak calendar."""
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    activity_date = db.Column(db.Date, nullable=False)

    __table_args__ = (db.UniqueConstraint("user_id", "activity_date"),)