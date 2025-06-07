# Full-Stack Application Template

This is a template repository for building full-stack web applications with a React frontend and FastAPI backend.

## Repository Structure

- `frontend/` - React + TypeScript + Vite frontend application
- `backend/` - FastAPI Python backend application
- `e2e/` - End-to-end tests using Playwright
- `.github/` - GitHub workflows and templates
- `docker-compose.yml` - Docker Compose configuration for local development and testing

## Getting Started

### Prerequisites

- Node.js (v18+)
- Python (v3.9+)
- Poetry (for Python dependency management)
- Docker and Docker Compose (optional, for containerized development)

### Setup

1. Clone this repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Set up the frontend:
```bash
cd frontend
npm install
```

3. Set up the backend:
```bash
cd backend
poetry install
```

4. Set up end-to-end tests:
```bash
cd e2e
npm install
```

## Development

### Running the Frontend

```bash
cd frontend
npm run dev
```

The frontend development server will be available at http://localhost:5173

### Running the Backend

```bash
cd backend
poetry run ./run.sh
```

The backend API will be available at http://localhost:8000

### API Documentation

Once the backend is running, you can access the auto-generated API documentation at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Testing

### Backend Tests

```bash
cd backend
poetry run pytest
```

### Frontend Tests

```bash
cd frontend
npm run test
```

### End-to-End Tests

```bash
cd e2e
npm run test
```

## Docker Development

You can also use Docker Compose to run the entire stack:

```bash
docker compose up
```

This will start the frontend, backend, and a development database.

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
