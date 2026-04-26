FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

RUN apt-get update \
    && apt-get install -y --no-install-recommends pandoc git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY tools ./tools

CMD ["python3", "tools/obsidian_hexo_web.py"]
