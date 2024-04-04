# Use the specified node version as the base image
FROM ubuntu:22.04
FROM node:20.11.1

# Set the working directory in the container
WORKDIR /001_my-simple-server

# Install net-tools for netstat command
RUN apt-get update && apt-get install -y net-tools

# Create a new user 'appuser' and set it as the current user
RUN useradd -m appuser
USER appuser

# Copy the current directory contents into the container
COPY --chown=appuser . .
USER root
RUN npm install
USER appuser



# Run the command when the container launches
CMD [ "npm","start" ]

# Expose port 80
EXPOSE 80
