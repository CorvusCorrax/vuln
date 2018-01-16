function FrontController () {
}

FrontController.prototype = {
  login,
  sign_in,
  todolist,
  add_todo
};

module.exports = FrontController;

function login (request, reply) {
  reply.file(__dirname + "/../html/login.html");
}

function sign_in (request, reply) {
  reply.file(__dirname + "/../html/sign_in.html");
}

function todolist (request, reply) {
  var req = require('request');
  req.post({url: 'http://localhost:3000/todolist', form: {userId: request.state['meinData']}}, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    reply.file(__dirname + "/../html/todo.html");
  });
}

function add_todo (request, reply) {
  reply.file(__dirname + "/../html/new_todo.html");
}
