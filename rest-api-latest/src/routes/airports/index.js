'use strict'

var express = require('express');
var airports = express.Router();
const airportRoute = require('./airport-route');

airports.get('/', airportRoute.getAllAirport);
airports.get('/:airportCode', airportRoute.getAirportBycode);

module.exports = airports;