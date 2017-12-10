// this is the configVals.json file
var configVals = require('./config');

module.exports = {
    getDBConectionString: function(){
        return 'mongodb://' + configVals.uname + ':' + configVals.pwd + '@ds135966.mlab.com:35966/first_node_app'
    }
}