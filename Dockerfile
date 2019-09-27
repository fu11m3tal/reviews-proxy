FROM node:8.15.1

RUN mkdir -p /proxy-server

WORKDIR /proxy-server

COPY . /proxy-server

RUN npm install --only=prod

EXPOSE 3000

CMD ["npm", "start"]