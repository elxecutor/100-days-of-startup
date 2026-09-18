# ── Stage 1: build the Next.js frontend into static HTML ──
FROM oven/bun:1-alpine AS frontend
WORKDIR /app/frontend
COPY frontend/package.json frontend/bun.lock* ./
RUN bun install
COPY frontend/ ./
# No NEXT_PUBLIC_API_URL here: the app defaults to same-origin (""), which is
# correct because FastAPI serves this site and the API from one host.
RUN bun run build

# ── Stage 2: Python runtime serving API + website ──
FROM python:3.12-slim
WORKDIR /app/backend
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ ./
COPY --from=frontend /app/frontend/out ./static
EXPOSE 8000
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]
