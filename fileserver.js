var http = require('http'); 
var mongo = require('mongoskin');
var fs = require('fs');
var path = require('path');

// CREATE SERVER //
http.createServer(function (request, response) {
    
    if ( request.headers['content-type'] != 'text/json' )
        serveStaticFile(request, response);
    else 
        serveMongo(request, response);
     
}).listen(process.env.PORT, "0.0.0.0");
console.log('Server running...');

// FILE SERVER //
var serveStaticFile = function(request, response) {
    var filePath = '.' + request.url;
    if (filePath == './')
		filePath = './index.html';
	
    
	var extname = path.extname(filePath);
	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}
	
	console.log('request: ' + filePath + ", content type: " + contentType);
	 
	path.exists(filePath, function(exists) {
	 
		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				}
				else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
			});
		}
		else {
			response.writeHead(404);
			response.end();
		}
	});    
};


// SERVICES //
var serveMongo = function(req, res) {
    
    var db = mongo.db('mongodb://nerd:dork@staff.mongohq.com:10084/rolodex');
  
    db.collection('nerds').find({}).toArray(function(err, items){
        if(err) throw err;

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(items));
    }); 
};