'use strict';

const Controller = require('./controller');

exports.register = (server, options, next) => {

const controller = new Controller();

  server.route([
    {
      method: 'GET',
      path: '/login',
      config: {
        auth: false,
        handler: controller.login
      }
    },
    {
      method: 'GET',
      path: '/sign_in',
      config: {
        auth: false,
        handler: controller.sign_in
      }
    },
    {
      method: 'GET',
      path: '/todolist',
      config: {
        auth: false,
        handler: controller.todolist
      }
    },
    {
      method: 'GET',
      path: '/add_todo',
      config: {
        auth: false,
        handler: controller.add_todo
      }
    },
  ]);

  next();
};

exports.register.attributes = {
  name: 'front-route',
  version: '1.0.0'
};
