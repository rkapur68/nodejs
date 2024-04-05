# Use the CentOS Stream 9 base image
FROM quay.io/centos/centos:stream9 

# Update packages and install basic tools
RUN dnf update -y && \
    dnf install -y nano net-tools iproute

# Install Node.js 
RUN curl -sL https://rpm.nodesource.com/setup_20.x | bash - 
RUN dnf install -y nodejs-20.11.1

# Create a non-root user 
RUN useradd -m appuser

# Set the working directory
WORKDIR /002_my-simple-server-centos

# Copy project files and ensure the 'appuser' owns them 
COPY --chown=appuser . .

# Switch to the non-root user for security
USER appuser

# Install dependencies 
RUN npm install

# Define the default command to run when the container starts
CMD [ "npm","start" ]  

# Expose port 80 (for potential external access)
EXPOSE 80
