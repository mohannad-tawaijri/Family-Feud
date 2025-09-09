# syntax=docker/dockerfile:1

# ----- Build stage -----
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Build
COPY . .
RUN npm run build

# ----- Runtime stage -----
FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app

# Lightweight static file server
RUN npm i -g serve@14

# Copy built assets only
COPY --from=build /app/dist ./dist

# Render provides PORT
ENV PORT=8080
EXPOSE 8080

CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
