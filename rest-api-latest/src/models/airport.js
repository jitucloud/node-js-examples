'use strict'

const fetch = require('node-fetch');

module.exports = {
    getAllAirport: async function getAllAirport() {
        const response =   await fetch('https://www.qantas.com.au/api/airports');
        return response.json();
    }   
}
