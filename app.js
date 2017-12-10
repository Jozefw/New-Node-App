var express = require('express');
var app = express();
// this is the config folder and will give the module.exports with the config.json and indexedDB.js file
var config = require('./config');
var setUpController = require('./controllers/setUpController');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

app.use ('/assets', express.static(__dirname + '/public'));

app.set('view-engine','ejs');
mongoose.connect(config.getDBConectionString());
setUpController(app);
app.listen(port);
