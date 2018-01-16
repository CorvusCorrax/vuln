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
  var fs = require('fs');
  req.get('http://localhost:3000/todo?userId=' + request.state['meinData'], function (error, response, body) {
    body = JSON.parse(body);
    console.log('body:', body); // Print the HTML for the Google homepage.
    var res = '';
    for (var i = 0; i < body.length; ++i) {
      res += body[i].name + '<br>';
    }
    res = fs.readFileSync(__dirname + "/../html/todo_top.html") + res + '<br>' + fs.readFileSync(__dirname + "/../html/todo_bot.html");
    reply(res);
  });
}

function add_todo (request, reply) {
  reply.file(__dirname + "/../html/new_todo.html");
}
