'use strict'

const _ = require('lodash');
const fetch = require('node-fetch');
var memoize = require("memoizee");


async function getAllAirport (){
    const response =  await fetch('https://www.qantas.com.au/api/airports');
    return response.json();
}

module.exports = {    

    getAllAirport: async function getAllAirport (){
        const response =  await fetch('https://www.qantas.com.au/api/airports');
        return response.json();
    },

    getAirportbyCode: async function getAirportbyCode(code){
       const airportObject =  await getAllAirport();
       const airport = _.filter(airportObject.airports, function(airport) {
            return airport.code !== ' ' &&  airport.code.toLowerCase() === code.toLowerCase();
        });
        return airport;
    }
    
}
