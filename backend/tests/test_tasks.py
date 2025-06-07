def test_get_tasks(client):
    response = client.get("/api/tasks")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 3


def test_get_task_by_id(client):
    response = client.get("/api/tasks/1")
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Task One"
    assert data["completed"] is True


def test_get_task_not_found(client):
    response = client.get("/api/tasks/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "Task not found"


def test_create_task(client):
    new_task = {
        "title": "New Task",
        "description": "Test task",
        "completed": False,
        "user_id": 1,
    }
    response = client.post("/api/tasks", json=new_task)
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "New Task"
    assert data["id"] == 4


def test_update_task(client):
    updated_task = {
        "title": "Updated Task",
        "description": "Updated description",
        "completed": True,
        "user_id": 1,
    }
    response = client.put("/api/tasks/1", json=updated_task)
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Updated Task"
    assert data["completed"] is True


def test_update_task_not_found(client):
    updated_task = {
        "title": "Updated Task",
        "description": "Updated description",
        "completed": True,
        "user_id": 1,
    }
    response = client.put("/api/tasks/999", json=updated_task)
    assert response.status_code == 404
    assert response.json()["detail"] == "Task not found"
