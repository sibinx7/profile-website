var Hapi = require('hapi');

var server = new Hapi.Server();

var port = process.env.PORT || 4000
var host = process.env.HOST || 'localhost'
server.connection({port: port})

server.register([require('inert'), require('vision')], function(){
  server.route({
    method:'GET',
    path: '/',
    handler: function(request, reply){
	     reply.view('index.html')
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'dist',
        listing: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: 'dist/assets',
        listing: true
      }
    }
  });

  server.views({
      engines: {
          html: require('handlebars')
      },
      relativeTo: __dirname,
      path: 'dist'
  });
});


server.start(function(err){
  console.log("Server loading...")
})
