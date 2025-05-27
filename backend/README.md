# My Agent Backend

This is a FastAPI backend for the My Agent application.

## Setup

1. Install dependencies:
```bash
cd backend
poetry install
```

2. Run the development server:
```bash
poetry run python app/main.py
```

The API will be available at http://localhost:8000

## API Documentation

Once the server is running, you can access the auto-generated API documentation at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/users` - Get all users
- `GET /api/users/{user_id}` - Get a specific user
- `POST /api/users` - Create a new user
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/{task_id}` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{task_id}` - Update a task
