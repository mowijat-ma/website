# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Build the app
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Runner (The tiny final image)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Disable telemetry during runtime
ENV NEXT_TELEMETRY_DISABLED 1

# Copy only what is needed from the builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]