'use strict'

const airportController = require('../../controllers/airport');
const asyncMiddleware = require('../../middleware/asyncMiddleware');
 
module.exports = asyncMiddleware ( async function(req, res, next) { 
      const model = await airportController.getAirportByCode();
      res.status(200).json(model);   
});

