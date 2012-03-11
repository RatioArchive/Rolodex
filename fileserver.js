var http = require('http'), 
    fs = require('fs'),
    path = require('path'),
    mongo = require('mongoskin');
    

// Database Connection //
var db = mongo.db('mongodb://nerd:dork@staff.mongohq.com:10084/rolodex');

// CREATE SERVER //
http.createServer(function (request, response) {
    
    if ( request.headers['content-type'] == 'text/json' ) {
        serveMongo(request, response);
    }
    else {
        serveStaticFile(request, response);
    }
    
     
}).listen(process.env.PORT, "0.0.0.0");
console.log('server running...');

// FILE SERVER //
var serveStaticFile = function(request, response) {
    var filePath = '.' + request.url;
    if (filePath == './') filePath = './index.html';
	
    
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
	
	console.log('serving ' + filePath + ", content type: " + contentType);
	 
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
    var nerd = '';
    
    console.log('data request: '+req.url);
    
    if(req.url.indexOf('?') > 0) {
        nerd = unescape(req.url.substring(req.url.indexOf('?')+1, req.url.length));
        req.url = req.url.substring(0, req.url.indexOf('?'));
    }
    
    if (req.url == '/nerd-names') {
        db.collection('nerds').find({},{'name':1}).sort({name:1}).toArray( function(err, items) {
            if(err) throw err;
    
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(items));
        }); 
    }
    else if (req.url == '/name') {
        console.log('serving data on nerd '+nerd);
        db.collection('nerds').find({name:nerd}).toArray( function(err, items) {
            if(err) throw err;
    
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(items));
        }); 
    }
    
};