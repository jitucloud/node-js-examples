'use strict'

var airportModel = require('../models/airport');
module.exports = {
    getAirportByCode:  async function getAirportByCode() {
        var airportList =  await airportModel.getAllAirport();
        return airportList;
    }   
}
