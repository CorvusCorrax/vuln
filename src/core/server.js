'use strict';

require('dotenv').config({silent: true});

// Load deps
const Hapi = require('hapi');

let server;

module.exports = server = new Hapi.Server();

// Set the port for listening
server.connection({
  host: process.env.SERVER_HOST || 'localhost',
  port: process.env.SERVER_PORT || '3000'
});

server.state('meinData', {
    ttl: 1000 * 60 * 60 * 24,
    isHttpOnly: false,
    encoding : 'none'
});
