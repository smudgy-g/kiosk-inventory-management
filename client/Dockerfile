# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY package.json /app/package.json
COPY . /app
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000