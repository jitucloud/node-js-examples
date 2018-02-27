'use strict'

const _ = require('lodash');
const fetch = require('node-fetch');
var memoize = require("memoizee");


async function callQantasApi(){
    return (await fetch('https://www.qantas.com.au/api/airports')).json();
}

module.exports = {    

    getAllAirport: async function getAllAirport (){
        return await callQantasApi();
    },

    getAirportbyCode: async function getAirportbyCode(code){
       const airportObject =  await callQantasApi();
       const airport = _.filter(airportObject.airports, function(airport) {
            return airport.code !== ' ' &&  airport.code.toLowerCase() === code.toLowerCase();
        });
        return airport;
    }
    
}
