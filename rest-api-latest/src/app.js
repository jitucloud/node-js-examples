'use strict'

const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Include all routes by using one single file
app.use('/', routes)

//Thsi will catch all not found requests
app.use(function(req, res) {
    res.status(404).json({url: req.originalUrl + ' not found'})
});

module.exports = app



