# syntax=docker/dockerfile:1

# --- Build stage (app in subfolder) ---
FROM node:20-alpine AS build
WORKDIR /app

# Copy lockfiles if present
COPY family-feud-game/package.json family-feud-game/package-lock.json* family-feud-game/pnpm-lock.yaml* family-feud-game/yarn.lock* ./family-feud-game/

# Install deps
RUN set -eux; \
    cd family-feud-game; \
    if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy source and build
COPY family-feud-game ./family-feud-game
RUN cd family-feud-game && npm run build

# --- Runtime stage ---
FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app

RUN npm i -g serve@14
COPY --from=build /app/family-feud-game/dist ./dist

ENV PORT=8080
EXPOSE 8080
CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
