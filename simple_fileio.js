var fs = require("fs");

fs.readFile("parse_file.txt", function(file_read_error, log_data) {
	if(file_read_error) throw file_read_error;

	var text = log_data.toString();
	var lines = text.split("\n");
	var line_number = 1;

	lines.forEach(function(line) {
		if(line != "") {
			console.log("Line #" + line_number++ + ": " + line);
		}
	});
});
