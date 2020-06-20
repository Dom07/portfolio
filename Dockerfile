FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install npm dependencies
COPY package*.json ./

RUN npm install
RUN npm install react-scripts@3.4.1 -g

# Bundle app source
COPY . .

Expose 3000
CMD ["npm", "start"]
