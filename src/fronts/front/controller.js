function FrontController () {
}

FrontController.prototype = {
  login
};

module.exports = FrontController;

function login (request, reply) {
  reply.file(__dirname + '/../html/bobby.html');
}
