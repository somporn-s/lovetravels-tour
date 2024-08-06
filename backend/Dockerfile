FROM node:20.9

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]