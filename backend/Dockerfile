# Use a Node.js runtime as the base image.
FROM node:18-alpine

# Set the working directory inside the container.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of your backend code.
COPY . .

# Expose the port your Express app listens on (e.g., 5000).
EXPOSE 5000

# Start the application.
CMD ["npm", "start"]