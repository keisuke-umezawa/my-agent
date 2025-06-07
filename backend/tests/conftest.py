import pytest
from fastapi.testclient import TestClient
from app.main import app, users_db, tasks_db, User, Task


@pytest.fixture
def client():
    return TestClient(app)


@pytest.fixture(autouse=True)
def reset_db():
    users_db.clear()
    users_db.extend(
        [
            User(id=1, name="User One", email="user1@example.com"),
            User(id=2, name="User Two", email="user2@example.com"),
        ]
    )
    tasks_db.clear()
    tasks_db.extend(
        [
            Task(
                id=1,
                title="Task One",
                description="Description for task one",
                completed=True,
                user_id=1,
            ),
            Task(
                id=2,
                title="Task Two",
                description="Description for task two",
                completed=False,
                user_id=1,
            ),
            Task(
                id=3,
                title="Task Three",
                description="Description for task three",
                completed=False,
                user_id=2,
            ),
        ]
    )
