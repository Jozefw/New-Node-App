var express = require('epress');
var app = express();
var mongoose = reqquire('mongoose');
var port = process.env.PORT || 3000;

app.use('/assests', express.static(__dirName + '/public'));

app.set('view engine','ejs');

mongoose.connect('mongodb://Jericho:My-mlab05@ds259325.mlab.com:59325/nodelistmaker')


app.listen(port);