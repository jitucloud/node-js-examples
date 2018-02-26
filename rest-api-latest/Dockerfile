#FROM node:8 as build
#WORKDIR /app
#COPY package.json server.js package-lock.json data.json /controllers /models  /routes /src  ./
#RUN npm install

#FROM gcr.io/distroless/nodejs
#COPY --from=build /app /
#EXPOSE 3000
#CMD [ "npm", "start" ]

FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY server.js data.json controllers/ models/  routes/ src/ /usr/src/app/

EXPOSE 3000

CMD [ "npm", "start" ]