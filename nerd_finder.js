var http = require('http'),
   mongo = require('mongoskin');

http.createServer(function (req, res) {

  var conn = mongo.db('mongodb://nerd:dork@staff.mongohq.com:10084/rolodex');
  
  conn.collection('nerds').find({}).toArray(function(err, items){
    if(err) throw err;

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(items));
  });

}).listen(process.env.PORT, "0.0.0.0");
console.log('Server running...');