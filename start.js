var http = require('http');
var dt = require('./myDate.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Today is " + dt.myDateTime());
    res.write("<br/>");
    res.write(req.url);
    res.write("<br/>");
    res.end('Hello World!');
}).listen(8080);