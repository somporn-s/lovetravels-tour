FROM node:22-alpine3.19

# set the working directory to /app
RUN mkdir -p /usr/src/app
WORKDIR /app

# copy package.json and package-lock.json to the working directory
COPY package*.json ./

# install dependencies
RUN npm install -g npm@latest

# copy the rest of the files to the working directory
COPY . .

# expose port 3000 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 3000

# command to run the app
CMD [ "npm", "run", "dev" ]

#docker build -t [image name] [path] 
#=> docker build -t frontend .
#docker run --name [container name] -p [port use]:[port in docker] [image name]
#=> docker run --name frontend -p 3000:3000 frontend