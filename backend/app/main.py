from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
from typing import List, Optional
from pydantic import BaseModel

load_dotenv()
PORT = os.getenv("PORT", "8000")

app = FastAPI(
    title="My Agent API",
    description="FastAPI backend for My Agent",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    id: Optional[int] = None
    name: str
    email: str

class Task(BaseModel):
    id: Optional[int] = None
    title: str
    description: str
    completed: bool = False
    user_id: int

users_db = [
    User(id=1, name="John Doe", email="john@example.com"),
    User(id=2, name="Jane Smith", email="jane@example.com")
]

tasks_db = [
    Task(id=1, title="Learn FastAPI", description="Build a simple API", completed=True, user_id=1),
    Task(id=2, title="Learn React", description="Build a frontend app", completed=False, user_id=1),
    Task(id=3, title="Integrate FastAPI with React", description="Connect frontend to backend", completed=False, user_id=2)
]

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "message": "API is running"}

@app.get("/api/users", response_model=List[User])
async def get_users():
    return users_db

@app.get("/api/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    for user in users_db:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="User not found")

@app.post("/api/users", response_model=User)
async def create_user(user: User):
    new_id = max([u.id for u in users_db], default=0) + 1
    new_user = User(id=new_id, name=user.name, email=user.email)
    users_db.append(new_user)
    return new_user

@app.get("/api/tasks", response_model=List[Task])
async def get_tasks():
    return tasks_db

@app.get("/api/tasks/{task_id}", response_model=Task)
async def get_task(task_id: int):
    for task in tasks_db:
        if task.id == task_id:
            return task
    raise HTTPException(status_code=404, detail="Task not found")

@app.post("/api/tasks", response_model=Task)
async def create_task(task: Task):
    new_id = max([t.id for t in tasks_db], default=0) + 1
    new_task = Task(
        id=new_id,
        title=task.title,
        description=task.description,
        completed=task.completed,
        user_id=task.user_id
    )
    tasks_db.append(new_task)
    return new_task

@app.put("/api/tasks/{task_id}", response_model=Task)
async def update_task(task_id: int, task: Task):
    for i, t in enumerate(tasks_db):
        if t.id == task_id:
            updated_task = Task(
                id=task_id,
                title=task.title,
                description=task.description,
                completed=task.completed,
                user_id=task.user_id
            )
            tasks_db[i] = updated_task
            return updated_task
    raise HTTPException(status_code=404, detail="Task not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=int(PORT), reload=True)
