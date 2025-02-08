FROM node:20-alpine3.20 AS base
# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the project
COPY . .

# Expose the default Docusaurus port
EXPOSE 3000

# Command to start the development server
CMD ["yarn", "start", "--host", "0.0.0.0"]
