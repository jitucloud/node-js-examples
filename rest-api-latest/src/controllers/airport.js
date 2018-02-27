'use strict'

var airportModel = require('../models/airport');

module.exports = {

    getAirportByCode:  async function getAirportByCode(code) {
        var airportList =  await airportModel.getAirportbyCode(code);
        return airportList;
    },

    getAllAirport:  async function getAllAirport() {
        var airportList =  await airportModel.getAllAirport();
        return airportList;
    } 
}
