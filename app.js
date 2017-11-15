var express = require('express');
var app = express();
var mongoose = require('mongoose');
// this is the config folder so we have access to index.js
var config = require('./config')
var port = process.env.PORT || 3000;

app.use('/assests', express.static(__dirname + '/public'));

app.set('view engine','ejs');

mongoose.connect('mongodb://Jericho:My-mlab05@ds259325.mlab.com:59325/nodelistmaker');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'ya, no. It didnt work, we got a connection error:'));
// db.once('open', function() {
//   console.log("yay...connected");
// });

app.listen(port);