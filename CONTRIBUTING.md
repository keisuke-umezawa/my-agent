# Development Environment Setup

This document explains how to set up the development environment for the My Agent project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Development Environment Setup](#development-environment-setup)
  - [Using DevContainer](#using-devcontainer)
  - [Local Environment Setup](#local-environment-setup)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Code Style](#code-style)

## Prerequisites

Before you begin development, ensure you have the following tools installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (version 20 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

If you plan to use DevContainer, you'll also need:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/)
- [VS Code Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Development Environment Setup

### Using DevContainer

Using DevContainer provides a consistent development environment with all dependencies pre-configured.

1. Clone the repository:

```bash
git clone https://github.com/keisuke-umezawa/my-agent.git
cd my-agent
```

2. Open the project in VS Code:

```bash
code .
```

3. VS Code will detect the `.devcontainer` folder and suggest reopening in a container. Click "Reopen in Container".
   - Alternatively, open the command palette (F1) and select "Remote-Containers: Reopen in Container".

4. Wait for VS Code to build and open the container. This may take a few minutes.

You now have a development environment with all necessary extensions and dependencies installed.

### Local Environment Setup

If you prefer not to use DevContainer, you can set up your local environment with the following steps:

1. Clone the repository:

```bash
git clone https://github.com/keisuke-umezawa/my-agent.git
cd my-agent
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

You can now access the application at [http://localhost:5173](http://localhost:5173).

## Development Workflow

1. Before working on a new feature or bug fix, create a new branch from the latest `main` branch:

```bash
git checkout main
git pull
git checkout -b feature/your-feature-name
```

2. Make changes to the code and commit them regularly:

```bash
git add <changed files>
git commit -m "Description of changes"
```

3. Push your changes:

```bash
git push origin feature/your-feature-name
```

4. Create a pull request on GitHub.

## Testing

The project includes the following types of tests:

1. Unit tests:

```bash
npm run test:unit
```

2. E2E tests:

```bash
npm run test
```

3. Type checking:

```bash
npm run typecheck
```

4. Linting:

```bash
npm run lint
```

Make sure all tests pass before creating a pull request.

## Code Style

This project uses ESLint and Prettier to enforce code style. Before committing your code, run the following command to check your code style:

```bash
npm run lint
```

If you're using DevContainer with VS Code, formatting will be automatically applied when you save files.
