import pytest
from fastapi.testclient import TestClient
from app.main import app, users_db, tasks_db, User, Task

@pytest.fixture
def client():
    return TestClient(app)

@pytest.fixture(autouse=True)
def reset_db():
    users_db.clear()
    users_db.extend([
        User(id=1, name="John Doe", email="john@example.com"),
        User(id=2, name="Jane Smith", email="jane@example.com")
    ])
    tasks_db.clear()
    tasks_db.extend([
        Task(id=1, title="Learn FastAPI", description="Build a simple API", completed=True, user_id=1),
        Task(id=2, title="Learn React", description="Build a frontend app", completed=False, user_id=1),
        Task(id=3, title="Integrate FastAPI with React", description="Connect frontend to backend", completed=False, user_id=2)
    ])
