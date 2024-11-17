# syntax = docker/dockerfile:1

# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1.1.34
FROM oven/bun:${BUN_VERSION}-slim as base

FROM base AS api_dev
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install
COPY . .
CMD ["bun", "run", "dev"]

FROM api_dev AS frontend_dev
WORKDIR /app/frontend
COPY frontend/package.json frontend/bun.lockb ./
RUN bun install
CMD ["bun", "run", "dev", "--host", "0.0.0.0", "--port", "5173"]