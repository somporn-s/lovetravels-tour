FROM node:22-alpine3.19

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /app

# Install app dependencies
COPY package*.json ./
#COPY --chown==node:node . .
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev" ]

#docker build -t [image name] [path] 
#=> docker build -t backend .
#docker run --name [container name] -p [port use]:[port in docker] [image name]
#=> docker run --name backend -p 8080:8080 backend