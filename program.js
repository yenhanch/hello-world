//Http JSON Api server

var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
    if(req.method!='GET')
        return res.end('Send me a GET request!')

    var parsedUrl = url.parse(req.url, true)
    var ISOString = parsedUrl.query["iso"]

    var myDate = new Date(ISOString)

    if(parsedUrl.pathname=='/api/parsetime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        myHour = myDate.getHours()
        myMinute = myDate.getMinutes()
        mySecond = myDate.getSeconds()

        var result = {
            hour: myHour,
            minute: myMinute,
            second: mySecond
        }

        res.end(JSON.stringify(result))

    }
    else if(parsedUrl.pathname=='/api/unixtime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var result = {
            unixtime: myDate.getTime()
        }

        res.end(JSON.stringify(result))
    }
    else return res.end('Unknown pathname!')

}).listen(Number(process.argv[2]))

/*//Http uppercaser

var http = require('http')
var map = require('through2-map')
var server = http.createServer(function (req, res) {
    if(req.method!='POST')
        return res.end('Send me a POST\n')

    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
}).listen(Number(process.argv[2]))*/

/*//Http file server

var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req, res) {

    var readStream = fs.createReadStream(process.argv[3])
    readStream.pipe(res)

}).listen(Number(process.argv[2]))*/

//Time server
/*var net = require('net')
var date = new Date()
var server = net.createServer(function (socket) {



    var mydate = date.getFullYear()+"-"+
    ("0"+(date.getMonth()+1)).slice(-2)+"-"+
    date.getDate()+" "+
    date.getHours()+":"+
    date.getMinutes()

    socket.end(mydate)
})

server.listen(process.argv[2])*/

/*//Juggling Async

var http = require('http')
var response_text = ["","",""]
var count = 0

function printResult() {
    for(i=0;i<3;++i) {
        console.log(response_text[i])
    }
}

function httpGet(index) {
    http.get(process.argv[2+index], function(response) {
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
            response_text[index]+=chunk
        })
        response.on('end', function(end) {
            count++;
            if(count==3)
                printResult()
        })
    })
}

for(i=0;i<3;++i) {
    httpGet(i)
}*/


/*//Http collect
var http = require('http')
var response_text = ""

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8')
    response.on('data', function(chunk) {
        response_text+=chunk
    })
    response.on('end', function(end) {
        console.log(response_text.length)
        console.log(response_text)
    })
})*/

//Http client
/*var http = require('http');

http.get(process.argv[2], function(response){
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
})*/

//Make it Modular
/*var mymodule = require('./readdir.js')

mymodule(process.argv[2], process.argv[3], function (err,data) {
    if (err) {
        return err;
    }
    data.forEach(function(file) {
        console.log(file);
    })
})*/

//Filtered LS
/*var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function(file) {
        if(path.extname(file)==='.'+process.argv[3])
            console.log(file);
    })
});*/
//My First Async I/O
/*var fs = require('fs');
var content;
// First I want to read the file
fs.readFile(process.argv[2], function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    var number = content.toString().split('\n').length-1
    // Invoke the next step here however you like
    console.log(number);   // Put all of the code here (not the best solution)
});*/
