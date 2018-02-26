'use strict'

const http = require('http');
const app = require('./src/app');

const port = process.env.PORT || 3000;
var server = http.createServer(app);

server.listen(port,()=>{
    console.log('rest api server is running on:' + port)
});
