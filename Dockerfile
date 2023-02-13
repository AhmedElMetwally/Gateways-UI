FROM node:19
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . /usr/src/app
RUN npm run build
CMD [ "npm", "run", "start:prod" ]