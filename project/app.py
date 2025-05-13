from flask import Flask, render_template, request, jsonify
import sqlite3
import os

app = Flask(__name__)

# Database configuration
DATABASE = 'tasks.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row  # Allows dictionary-style access
    return conn

# Initialize database

def init_db():
    with get_db_connection() as db:
        db.execute("""
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                content TEXT NOT NULL,
                done BOOLEAN DEFAULT FALSE
            )
        """)

# Routes
@app.route('/')
def index():
    with get_db_connection() as db:
        tasks = db.execute("SELECT * FROM tasks").fetchall()
    return render_template('index.html', tasks=tasks)

@app.route('/add_task', methods=['POST'])
def add_task():
    content = request.json['content']
    with get_db_connection() as db:
        cursor = db.execute("INSERT INTO tasks (content) VALUES (?)", (content,))
        db.commit()
        new_id = cursor.lastrowid
        new_task = db.execute("SELECT * FROM tasks WHERE id = ?", (new_id,)).fetchone()
    return jsonify(dict(new_task))

@app.route('/delete_task/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    with get_db_connection() as db:
        db.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
        db.commit()
    return jsonify({'success': True})

@app.route('/toggle_task/<int:task_id>', methods=['PATCH'])
def toggle_task(task_id):
    with get_db_connection() as db:
        task = db.execute("SELECT * FROM tasks WHERE id = ?", (task_id,)).fetchone()
        new_status = not task['done']
        db.execute("UPDATE tasks SET done = ? WHERE id = ?", (new_status, task_id))
        db.commit()
    return jsonify({'done': new_status})

if __name__ == '__main__':
    init_db()
    app.run(debug=True)