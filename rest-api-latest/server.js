const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Include all routes by using one single file
app.use('/', routes)

//Thsi will catch all not found requests
app.use(function(req, res) {
    res.status(404).json({url: req.originalUrl + ' not found'})
});

app.listen(port, ()=>{
    console.log('rest api server is running on:' + port)
});
