var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({port: 4000, host: 'localhost'})

server.register(require('vision'), function(){
  server.route({
    method:'GET',
    path: '/',
    handler: function(request, reply){
	     reply.view('index.html')
    }
  });

  server.views({
      engines: {
          html: require('handlebars')
      },
      relativeTo: __dirname,
      path: 'src'
  });
});

server.start(function(err){
  console.log("Server loading...")
})
