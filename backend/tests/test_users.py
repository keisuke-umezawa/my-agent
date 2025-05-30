def test_get_users(client):
    response = client.get("/api/users")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 2
    assert data[0]["name"] == "User One"

def test_get_user_by_id(client):
    response = client.get("/api/users/1")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "User One"
    assert data["email"] == "user1@example.com"

def test_get_user_not_found(client):
    response = client.get("/api/users/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "User not found"

def test_create_user(client):
    new_user = {"name": "Bob Wilson", "email": "bob@example.com"}
    response = client.post("/api/users", json=new_user)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Bob Wilson"
    assert data["email"] == "bob@example.com"
    assert data["id"] == 3
