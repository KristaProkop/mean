var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response) {

    console.log('client request URL: ', request.url);

    if (request.url === '/'){
        fs.readFile('index.html', 'utf8', function (
            errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/ninjas'){
        fs.readFile('ninjas.html', 'utf8', function (
            errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/dojos/new'){
        fs.readFile('dojos.html', 'utf8', function (
            errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else {
        // response.writeHead(404);
        fs.readFile('404.html', 'utf8', function (
            errors, contents) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
});

server.listen(6789);
console.log("Running in port 6789")


// localhost:6789/    This route should serve a view file called index.html and display a greeting.
// localhost:6789/ninjas    This route should serve a view file called ninjas.html and display information about ninjas.
// localhost:6789/dojos/new    This route should serve a view file called dojos.html and have a form (don't worry about where the form should be sent to).