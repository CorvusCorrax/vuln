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
      path: '/user',
      config: {
        auth: false,
        handler: controller.list
      }
    },
    {
      method: 'GET',
      path: '/user/{id}',
      config: {
        auth: false,
        handler: controller.read
      }
    },
    {
      method: 'POST',
      path: '/user',
      config: {
        auth: false,
        handler: controller.create
      }
    },
    {
      method: 'POST',
      path: '/user/login',
      config: {
        auth: false,
        handler: controller.logIn
      }
    },
    {
      method: 'PUT',
      path: '/user/{id?}',
      config: {
        auth: false,
        handler: controller.update
      }
    },
    {
      method: 'DELETE',
      path: '/user/{id?}',
      config: {
        auth: false,
        handler: controller.destroy
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'user-route',
  version: '1.0.0'
};
