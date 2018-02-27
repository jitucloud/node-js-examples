'use strict'

const airportController = require('../../controllers/airport');
const asyncMiddleware = require('../../middleware/asyncMiddleware');

exports.getAirportBycode = asyncMiddleware (async function (req, res){ 
      var airportCode = req.params.airportCode;
      const model = await airportController.getAirportByCode(airportCode);
      res.status(200).json(model);  
    });
    
exports.getAllAirport = asyncMiddleware (async function (req, res){ 
      const model = await airportController.getAllAirport();
      res.status(200).json(model);  
    });

