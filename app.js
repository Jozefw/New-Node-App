var express = require('epress');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assests', express.static(__dirName + '/public'));

app.set('view engine','ejs');



app.listen(port);