'use strict';

const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();

server.connection({ port: 2525 });

server.register([
  require('inert'),
  {
    register: require('good'),
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: { response: '*', log: '*' }
      }]
    }
  },
], (err) => {

  if (err) {
    throw err;
  }

  server.route({
    method: 'get',
    path: '/dist/{param*}',
    handler: {
      directory: {
        path: './dist'
      }
    }
  });


  server.route({
    method: 'get',
    path: '/',
    handler: function (request, reply) {
      reply.file('./views/index.html');
    }
  });


  server.start(()=>{
    server.log('info', `Server running at: ${server.info.uri}`);
  });
});
