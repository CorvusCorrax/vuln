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
  reply.file(__dirname + "/../html/todo.html");
}

function add_todo (request, reply) {
  reply.file(__dirname + "/../html/new_todo.html");
}
