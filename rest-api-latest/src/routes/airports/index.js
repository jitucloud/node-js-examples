var express = require('express');
var airports = express.Router();

var airportCntroller = require('../../controllers/airport');

// airport Routes
//airports.route('/').get(airportCntroller.get_all_airport_by_country);

module.exports = airports;