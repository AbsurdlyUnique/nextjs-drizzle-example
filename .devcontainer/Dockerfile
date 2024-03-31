# Use the official node image for Debian Bookworm
FROM node:21-bookworm

# Install necessary dependencies
RUN apt-get update && apt-get install -y curl bash git

# Install bun package manager
RUN curl -fsSL https://bun.sh/install | bash

# Ensure bun is in the PATH
ENV PATH="/root/.bun/bin:${PATH}"
