FROM node
# Create app directory
#RUN mkdir -p /usr/src/app && mkdir -p /usr/src/app/src
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json server.js data.json /usr/src/app/
RUN npm install

# Bundle app source
#COPY server.js data.json /usr/src/app/
COPY src/ /usr/src/app/src/
EXPOSE 3000
CMD [ "npm", "start" ]