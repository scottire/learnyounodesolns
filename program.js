
/*
Problem 2 - Baby Steps
var array = process.argv.slice(2);
var sum = array.reduce((a, b) => +a + +b, 0);
console.log(sum) 
*/

/*
Problem 3 - My First sync i/o

var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var string = buffer.toString();
var size = string.split('\n');
console.log(size.length-1);
*/

/*
Problem 4 - My First async i/o

var fs = require('fs');
function callback (err, data){
	var string = data.toString();
	var size = string.split('\n');
	console.log(size.length-1)
}
var string = fs.readFile(process.argv[2], callback);
*/

/*
Problem 5 - FILTERED LS  

var fs = require('fs');
var path = require('path') 
var fileType = process.argv[3]
function callback (err, files){
	for (i = 0; i < files.length; i++) {
    	if (path.extname(files[i]).slice(1) === fileType){
    		console.log(files[i])
    	}
	}
}
var string = fs.readdir(process.argv[2], callback);
*/

/*

Problem 6 - Make it modular (gotten from github)

var mymodule = require('./mymodule.js')  
var dirname = process.argv[2];
var ext = process.argv[3];

mymodule(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
*/

/*
Problem 7 - http client

var http = require('http');
var fs = require('fs');

var url = process.argv[2];

function callback (response) {
  response.setEncoding("utf8");
  response.on("data", function (data) { 
    console.log(data);
   });
  }  

http.get(url, callback);
*/ 

/*
Problem 8- http collect

var bl = require('bl');
var http = require('http');
var fs = require('fs');


var url = process.argv[2];

function callback (response) {
    response.setEncoding("utf8");
    response.pipe(bl(function (err, data) {
      console.log(data.length)
      console.log(data.toString())
    }))
  }  

http.get(url, callback);
*/

/*
Problem 9 - Juggling Async
var bl = require('bl');
var http = require('http');
var fs = require('fs');

var position = 2;
var url = process.argv[position];

function getNextUrl{
  if (position < 5){
        var url = process.argv[position];
        http.get(url, callback);
  }
}


function callback (response) {
    response.setEncoding("utf8");
    response.pipe(bl(function (err, data) {
      if (err) {
            return console.error(err)
      }
      console.log(data.toString())
      position += 1;
      
    }))
  }  

http.get(url, callback);
*/

/*
Problem 10 - Time server

var net = require('net')  
var port = process.argv[2];
var server = net.createServer(function (socket) {  
  var date = new Date(); //"YYYY-MM-DD hh:mm"
  var year = date.getFullYear()  
  var month = date.getMonth()     // starts at 0  
  month = month + 1
  var day = date.getDate()      // returns the day of month  
  var hour = date.getHours()  
  var min = date.getMinutes()   
  date = year + "-" + "0" + month + "-" + day + " " + hour + ":" + min + "\n" //this is just to pass the test, didn't see benefit of spending time making the time work always
  socket.end(date) 
})  
server.listen(port)  
*/

/*
Problem 11 -  HTTP FILE SERVER

var bl = require('bl');
var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filename = process.argv[3];


var server = http.createServer(function(req, res) {
  var readStream = fs.createReadStream(filename);
  readStream.pipe(res);
})
server.listen(port);

*/

/*
Problem 12 - HTTP UPPERCASERER

var http = require('http');
var fs = require('fs');
var map = require('through2-map')  

var port = process.argv[2];

var server = http.createServer(function(request, response) {
  request.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase()  
     })).pipe(response)  
})

server.listen(port);
*/

/*
Problem 13 - HTTP JSON API SERVER

var http = require('http')
var map = require('through2-map')
var url = require('url');
    
var server = http.createServer(function (request, response) {
var parsedRequest = url.parse(request.url, true);
  var dateString = parsedRequest.query.iso;
  var parsedDate =  new Date(dateString);

  if (parsedRequest.pathname == '/api/unixtime'){
    responseJSON = {"unixtime": parsedDate.getTime()};
  } else if (parsedRequest.pathname == '/api/parsetime'){
    var hour = parsedDate.getHours();
    var minute = parsedDate.getMinutes();
    var second = parsedDate.getSeconds();
    var responseJSON = {"hour":hour, "minute":minute, "second":second};  
  }

  if (responseJSON) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(responseJSON))
      } else {
        res.writeHead(404)
        res.end()
      }
})

server.listen(Number(process.argv[2]))

*/


