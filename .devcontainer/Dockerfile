FROM debian:bookworm

WORKDIR /app

ENV DENO_DIR=/deno_cache
RUN mkdir -p $DENO_DIR

# curl, git, ca-certificates をインストール
RUN apt update && apt install -y ca-certificates curl git unzip && \
    apt clean && rm -rf /var/lib/apt/lists/*

# Deno を公式スクリプト経由でインストール
RUN curl -fsSL https://deno.land/install.sh | DENO_INSTALL=/usr/local sh && \
    ln -s /usr/local/bin/deno /usr/bin/deno
