FROM mcr.microsoft.com/devcontainers/typescript-node:20

# Install additional tools
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install Playwright browsers
RUN su node -c "npm install -g @playwright/test" \
    && su node -c "npx playwright install --with-deps chromium"

WORKDIR /workspaces/my-agent

USER node
