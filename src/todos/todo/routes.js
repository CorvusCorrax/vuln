'use strict';

const Controller = require('./controller');
const Validator = require('./schema');

exports.register = (server, options, next) => {
  // instantiate controller
  const controller = new Controller(server.database);

  server.bind(controller);
  server.route([
    {
      method: 'GET',
      path: '/todo',
      config: {
        auth: false,
        handler: controller.list
      }
    },
    {
      method: 'POST',
      path: '/todolist',
      config: {
        auth: false,
        handler: controller.list
      }
    },
    {
      method: 'GET',
      path: '/todo/{id}',
      config: {
        auth: false,
        handler: controller.read
      }
    },
    {
      method: 'POST',
      path: '/todo',
      config: {
        auth: false,
        handler: controller.create
      }
    },
    {
      method: 'PUT',
      path: '/todo/{id?}',
      config: {
        auth: false,
        handler: controller.update
      }
    },
    {
      method: 'DELETE',
      path: '/todo/{id?}',
      config: {
        auth: false,
        handler: controller.destroy
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'todo-route',
  version: '1.0.0'
};
