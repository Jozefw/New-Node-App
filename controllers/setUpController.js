var Todos = require('../models/model.js');

module.exports = function(app){
app.get('/api/setupTodos',function(req,res){

    // seed database
    var starterTodos = [
        {
            username: 'Myself',
            todo: 'yoga',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'Myself',
            todo: 'food',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'Myself',
            todo: 'make choc milkshake',
            isDone: false,
            hasAttachment: false
        }
    ];
    Todos.create(starterTodos, function(err,results){
        res.send(results);
    });
});
}