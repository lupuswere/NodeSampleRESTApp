/// Import libraries
var express = require('express');
// Library to parse req body
var bodyParser = require('body-parser');
// Library to configure file path
var path = require('path');
// Library to parse cookies
var cookieParser = require('cookie-parser');

// Set up the server
var app = express();
// Configure port
var customPort = 8080;
var portName = 'port';
app.set(portName, process.env.PORT || customPort);
// Configure path
var scriptRootDirectory = 'public';
app.use(express.static(path.join(__dirname, scriptRootDirectory)));
// Configure body parsing
app.use(bodyParser.urlencoded({
    extended : true
}));
// To use JSON for body parsing
app.use(bodyParser.json());
// Use cookie parser
app.use(cookieParser());

// utilities
function logRequestForAPI(apiString, request) {
    console.log('REST API ' + apiString + ' logs:');
    console.log('Request data: ');
    var headers = request.headers;
    console.log(JSON.stringify(headers, null , 4));
}

// REST APIs
var rootAPI = '/';
var getHttpOnly = 'gethttponly';
var getNotHttpOnly = 'getnothttponly';
var postHttpOnly = 'posthttponly';
var postNotHttpOnly = 'postnothttponly';

app.get(rootAPI, function (req, res) {
    logRequestForAPI(rootAPI, req);
    res.sendFile(__dirname + '/views/index.html');
});

app.get(rootAPI + getHttpOnly, function (req, res) {
    logRequestForAPI(getHttpOnly, req);
    res.writeHead(200, {
        'Set-Cookie' : 'getHttpOnly=what;HttpOnly;expires=' + new Date(new Date().getTime() + 86409000).toUTCString(),
        'Content-Type' : 'text/plain'
    });
    res.end('Fine\n');
});

app.get(rootAPI + getNotHttpOnly, function (req, res) {
    logRequestForAPI(getNotHttpOnly, req);
    res.writeHead(200, {
        'Set-Cookie' : 'getNotHttpOnly=what;expires=' + new Date(new Date().getTime() + 86409000).toUTCString(),
        'Content-Type' : 'text/plain'
    });
    res.end('Fine\n');
});

app.post(rootAPI + postHttpOnly, function (req, res) {
    logRequestForAPI(postHttpOnly, req);
    res.writeHead(200, {
        'Set-Cookie' : 'postHttpOnly=what;HttpOnly;expires=' + new Date(new Date().getTime() + 86409000).toUTCString(),
        'Content-Type' : 'text/plain'
    });
    res.end('Fine\n');
});

app.post(rootAPI + postNotHttpOnly, function (req, res) {
    logRequestForAPI(postNotHttpOnly, req);
    res.writeHead(200, {
        'Set-Cookie' : 'postNotHttpOnly=what;expires=' + new Date(new Date().getTime() + 86409000).toUTCString(),
        'Content-Type' : 'text/plain'
    });
    res.end('Fine\n');
});

// Launch the server
app.listen(app.get(portName), function () {
    console.log('Listening on port ' + app.get(portName));
});
