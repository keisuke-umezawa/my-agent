# E2E Testing

This directory contains end-to-end tests for the My Agent application using Playwright and Docker Compose.

## Running Tests

To run the E2E tests:

```bash
# From the e2e directory
npm run test
```

This will:
1. Build the necessary Docker containers
2. Start the frontend and backend services
3. Run the Playwright tests against the running services

Note: The commands use `docker compose` (with a space) instead of `docker-compose` (with a hyphen) as this is the newer syntax supported by GitHub Actions.

## Test Structure

- `tests/` - Contains all Playwright test files
- `playwright.config.ts` - Configuration for Playwright

The Docker Compose configuration for the test environment is located in the root directory's `docker-compose.yml` file, which includes a dedicated `e2e` service with the `testing` profile.

## Development

When developing new tests, you can use the following commands:

```bash
# Run tests with UI
npm run test:ui

# Run tests in headed mode (with browser visible)
npm run test:headed
```
