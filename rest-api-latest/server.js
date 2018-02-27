'use strict'

const http = require('http');
const app = require('./src/app');

const PORT = process.env.PORT || 4000;
const API_ENV= process.env.ENV || 'DEV';
var server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(API_ENV + ' Rest api server is running on:' + PORT)
});
