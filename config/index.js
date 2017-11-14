var configValues = require('./config');

module.exports = {
	getDBConnectionString: function(){
		return 'mongodb://' + configValues.username + ':' + configValues.password + '@ds259325.mlab.com:59325/nodelistmaker'
	}
}