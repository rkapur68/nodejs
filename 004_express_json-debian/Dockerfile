FROM debian:11

WORKDIR /app
COPY . .

# Enable "contrib" repository for additional packages
RUN sed -i '/deb http:\/\/deb.debian.org\/debian bullseye main/ s/main/main contrib/' /etc/apt/sources.list

# Install build dependencies 
RUN apt-get update && apt-get install -y --no-install-recommends build-essential python3 make g++ curl file 

RUN apt-get update && apt-get install -y ca-certificates 

# Download and install Node.js version 20.11.1 (ARM64 binary)
# **Adjust the URL below if needed for the ARM64 version**
RUN curl -SLO "https://nodejs.org/dist/v20.11.1/node-v20.11.1-linux-arm64.tar.xz" && \ 
    tar -xJf node-v20.11.1-linux-arm64.tar.xz && \
    rm node-v20.11.1-linux-arm64.tar.xz && \
    mv node-v20.11.1-linux-arm64 /usr/local/lib/nodejs && \
    ln -sf /usr/local/lib/nodejs/bin/node /usr/local/bin/node && \
    ln -sf /usr/local/lib/nodejs/bin/npm /usr/local/bin/npm

# Update PATH environment variable 
ENV PATH="/usr/local/bin:$PATH" 

# Create non-root user 
RUN useradd -m appuser

# Change ownership of the working directory
RUN chown -R appuser:appuser /app

# Switch to the non-root user
USER appuser 

# Install dependencies 
RUN npm install

CMD [ "npm", "start" ] 
