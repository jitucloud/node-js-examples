'use strict'

var express = require('express');
var airports = express.Router();
const all = require('./all');
const single = require('./single');

airports.get('/', all);
airports.get('/:airportCode',  single);

module.exports = airports;