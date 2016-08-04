var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);// tells node to start a new server and use app

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function(){
	console.log('server started');
});
