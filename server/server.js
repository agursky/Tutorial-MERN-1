var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

//controllers
var schoolController = require('./controllers/SchoolController');

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, '../app/dist')));
app.use(bodyParser.json());
app.use('/api', schoolController);
app.listen(7777, function() {
    console.log('Started listening on port', 7777);
})


//Creates an express app listening on port 7777. Configures app to serve static content like html, css, and images from specified folder. 


mongoose.connect('mongodb://localhost/schoolfinder');
//schoolfinder is the database name. it will be created automatically when the first record is inserted.
