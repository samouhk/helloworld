var http = require('http');

http.createServer(function (req, res) {
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('The program is called on ' + date + " " + time + ' by Sam');
}).listen(8080);
