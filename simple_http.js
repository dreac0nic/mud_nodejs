var http = require("http");

var port_number = 8080;

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello, world!\n");
}).listen(port_number);

console.log("Server is running on port " + port_number + "!");
