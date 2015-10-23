var fs = require("fs");
var http = require("http");

var port_number = 8080;
var email_regex = /([\w\.]+)@([\w\.]+)\.([a-z]{2,3})/i;
var emails = [];

http.createServer(function(request, response) {
	fs.readFile("emails.txt", function(file_read_error, log_data) {
		if(file_read_error) throw file_read_error;

		var text = log_data.toString();
		lines = text.split("\n");

		emails = [];

		lines.forEach(function(line) {
			var matches = line.match(email_regex);

			if(matches) {
				var email = {"Name": matches[1], "Domain": matches[2], "Designator": matches[2]};
				emails.push(email);
			}
		});
	});

	var page_content = "<html><head><title>Email Directory</title></head><body><h1>Email Directory</h1>";
	page_content += "<ul>";
	emails.forEach(function(email) {
		page_content += "<li><a href=\"mailto:";
		page_content += email["Name"] + "@" + email["Domain"] + "." + email["Designator"];
		page_content += "?Subject=Greetings!\" target=\"_top\">" + email["Name"] + "</a></li>"
	});
	page_content += "</ul></body></html>";

	response.writeHead(200, {"Content-Type": "text/html"});
	response.end(page_content);
}).listen(port_number);

console.log("Email directory is hosted on port " + port_number + "!");
