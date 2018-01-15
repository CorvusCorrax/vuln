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
  ]);

  next();
};

exports.register.attributes = {
  name: 'front-route',
  version: '1.0.0'
};
