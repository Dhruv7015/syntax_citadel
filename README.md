# 🏰 Syntax Citadel

Syntax Citadel is an interactive, gamified coding education platform where users learn programming by conquering a series of challenging worlds. By solving coding puzzles, users unlock new territories, build streaks, and climb the ranks of the citadel.

## 🚀 Quick Start

### Frontend
```bash
npm install
npm run dev
```
Access at [http://localhost:3000](http://localhost:3000)

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
API available at [http://localhost:5000](http://localhost:5000)

## 🌟 Key Features

- **🗺️ World-Based Progression**: Navigate through worlds like *Forest*, *Ice World*, and *Space*.
- **💻 Integrated IDE**: Built-in editor supporting JavaScript and Python.
- **⚙️ Judge0 Integration**: Real-time code execution against test cases.
- **❤️ Energy System**: Limited lives that regenerate over time to promote mindful coding.
- **🔥 Habit Tracking**: Daily streaks and a contribution-style activity calendar.
- **🔐 Secure Auth**: JWT-based authentication for progress synchronization.

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS, Lucide React.
- **Backend**: Flask, SQLAlchemy, Flask-JWT-Extended.
- **Infrastructure**: SQLite/PostgreSQL, Judge0 (via RapidAPI).

## 📂 Project Structure

```text
.
├── app/                # Next.js frontend routes and logic
│   ├── components/     # UI components
│   ├── context/        # Global state management
│   ├── game/           # Game engine components
│   ├── play/           # Dynamic world/level routing
│   ├── login/          # Auth: Login page
│   └── signup/         # Auth: Signup page
├── backend/            # Flask API
│   ├── app.py          # Entry point and endpoints
│   └── model.py       # Database models (User, Progress, Activity)
├── data/               # Game content (Levels, Questions)
├── lib/                # Shared utilities and Judge0 API client
├── public/             # Static assets and images
└── docs/                # Project documentation
```

---
Developed for educational purposes.
