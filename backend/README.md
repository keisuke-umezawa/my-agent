# Backend API Template

This is a FastAPI backend template for building RESTful APIs.

## Setup

1. Install dependencies:
```bash
cd backend
poetry install
```

2. Run the development server:
```bash
poetry run ./run.sh
```

The API will be available at http://localhost:8000

## API Documentation

Once the server is running, you can access the auto-generated API documentation at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Development

### Running Tests
```bash
poetry run pytest
```

### Linting and Type Checking
```bash
poetry run flake8 app tests
poetry run mypy app tests
```

### Code Formatting
```bash
poetry run black app tests
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/users` - Get all users
- `GET /api/users/{user_id}` - Get a specific user
- `POST /api/users` - Create a new user
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/{task_id}` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{task_id}` - Update a task

## Project Structure

- `app/` - Application source code
  - `main.py` - FastAPI application and endpoints
- `tests/` - Test files
  - `conftest.py` - Test fixtures and configuration
  - `test_*.py` - Test modules
