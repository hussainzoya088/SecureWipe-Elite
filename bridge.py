from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3
from fastapi.middleware.cors import CORSMiddleware
import datetime

app = FastAPI()

# This allows your HTML to talk to this Python script
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

# Initialize the SQLite Database in your folder
def init_db():
    conn = sqlite3.connect('titanwipe_audit.db')
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS logs 
                     (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                      device TEXT, method TEXT, entropy REAL, timestamp TEXT)''')
    conn.commit()
    conn.close()

init_db()

class WipeEntry(BaseModel):
    device: str
    method: str
    entropy: float

@app.post("/log-event")
async def log_event(entry: WipeEntry):
    conn = sqlite3.connect('titanwipe_audit.db')
    cursor = conn.cursor()
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    cursor.execute("INSERT INTO logs (device, method, entropy, timestamp) VALUES (?, ?, ?, ?)",
                   (entry.device, entry.method, entry.entropy, now))
    conn.commit()
    conn.close()
    return {"status": "SUCCESS", "time": now}