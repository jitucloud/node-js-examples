'use strict'

const routes = require('express').Router();

const models = require('./models');
const airports = require('./airports');

routes.use('/models', models);
routes.use('/airports', airports);



routes.get('/',(req,res) => {
    res.status(200).json({message:'Connected'});
})

routes.all('/secret', function (req, res, next) {
    res.status(200).json({message:'Accessing the secret section ...'});
    next() // pass control to the next handler
})

module.exports = routes;