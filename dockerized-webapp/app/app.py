from flask import Flask, render_template, request, jsonify
import mysql.connector
import os
import time

app = Flask(__name__)

def get_db():
    retries = 5
    while retries:
        try:
            conn = mysql.connector.connect(
                host=os.environ.get("DB_HOST", "db"),
                user=os.environ.get("DB_USER", "root"),
                password=os.environ.get("DB_PASSWORD", "password"),
                database=os.environ.get("DB_NAME", "webapp")
            )
            return conn
        except mysql.connector.Error:
            retries -= 1
            time.sleep(2)
    raise Exception("Could not connect to database after retries")

def init_db():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS notes (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    cursor.close()
    conn.close()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/notes", methods=["GET"])
def get_notes():
    conn = get_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM notes ORDER BY created_at DESC")
    notes = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(notes)

@app.route("/api/notes", methods=["POST"])
def add_note():
    data = request.get_json()
    title = data.get("title", "").strip()
    content = data.get("content", "").strip()
    if not title or not content:
        return jsonify({"error": "Title and content required"}), 400
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO notes (title, content) VALUES (%s, %s)", (title, content))
    conn.commit()
    note_id = cursor.lastrowid
    cursor.close()
    conn.close()
    return jsonify({"id": note_id, "message": "Note added"}), 201

@app.route("/api/notes/<int:note_id>", methods=["DELETE"])
def delete_note(note_id):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM notes WHERE id = %s", (note_id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Note deleted"})

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    init_db()
    app.run(host="0.0.0.0", port=5000, debug=False)
