var mongoose = require('mongoose');

var Schema = mongoose.Schema();

var todoSchema = new Schema({
	user:string,
	todo:string,
	isDone:boolean,
	hasAttachment: boolean
});

var Todos = mongoose.model('Todos',todoSchema);

module.exports = Todos;