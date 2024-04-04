# Use the specified ubuntu version as the base image
FROM ubuntu:22.04
# Use the specified node version as the base image
FROM node:20.11.1

# Set the working directory in the container
WORKDIR /001_my-simple-server

# Install net-tools for netstat command
USER root
RUN apt-get update && apt-get install -y net-tools sudo

# Create a new user 'appuser' and set it as the current user
RUN useradd -m appuser

# Set password for 'appuser'
#RUN echo 'appuser:password' | chpasswd

# Add 'appuser' to the 'sudo' group
#RUN adduser appuser sudo


# Ensure 'appuser' can run sudo commands without a password
#RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# Set password for 'root'
#RUN echo 'root:password' | chpasswd

# Switch to 'appuser'
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
