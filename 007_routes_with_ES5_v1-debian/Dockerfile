FROM debian:11
WORKDIR /app
COPY . .
# Enable "contrib" repository for additional packages

# * Original Line in /etc/apt/sources.list file:
#   deb http://deb.debian.org/debian bullseye main 
 
# How the sed Command Works:
# Pattern Matching: The sed command targets lines that start with "deb http://deb.debian.org/debian bullseye main/"
# Substitution s/replaceword/newword:  On a matching line:
#     s/main/main contrib/ substitutes the word "main" with "main contrib".

# Result will be in /etc/apt/sources.list file
#   The modified line now becomes: 
#   deb http://deb.debian.org/debian bullseye main contrib 

# -i flag - The changes made by the sed -i command within the Dockerfile persist within the built container image.

RUN sed -i '/deb http:\/\/deb.debian.org\/debian bullseye main/ s/main/main contrib/' /etc/apt/sources.list 


# Install build dependencies 
RUN apt-get update && apt-get install -y --no-install-recommends \
                          build-essential \
                          python3 \
                          make \
                          g++ \
                          curl \
                          file \
                          net-tools \
                          iproute2 

RUN apt-get update && apt-get install -y ca-certificates 

# Download and install Node.js version 20.11.1 (ARM64 binary)
# **Adjust the URL below if needed for the ARM64 version**
# curl: A command-line tool for downloading files.
# -S: Silent mode (suppress progress meter).
# -L: Follow redirects.
# -O: Save the downloaded file with the same name 
RUN curl -SLO "https://nodejs.org/dist/v20.11.1/node-v20.11.1-linux-arm64.tar.xz" && \ 
#tar: The command for manipulating archived files.
# -x: Extract mode.
# -J: Handle .xz compression.
# -f node-v20.11.1-linux-arm64.tar.xz: Specifies the archive file to extract from.
    tar -xJf node-v20.11.1-linux-arm64.tar.xz && \
# Removes the downloaded archive file to save space.
    rm node-v20.11.1-linux-arm64.tar.xz && \
# Moves the extracted Node.js directory to /usr/local/lib/nodejs
    mv node-v20.11.1-linux-arm64 /usr/local/lib/nodejs && \
# Creates a symbolic link named "node" in /usr/local/bin pointing to the Node.js binary. 
# This adds node to your PATH.
    ln -sf /usr/local/lib/nodejs/bin/node /usr/local/bin/node && \
# Similarly, creates a symbolic link for the npm (Node Package Manager) binary.
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