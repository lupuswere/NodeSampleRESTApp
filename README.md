# NodeSampleRESTApp
A simple node.js app with a couple of REST APIs.

This is for showing how to set up a simple node server as well as for testing purposes.

## To set up the server
```javascript
var express = require('express');
var app = express();
var customPort = 8080;
var portName = 'port';
app.set(portName, process.env.PORT || customPort);
app.listen(app.get(portName), function () {
    console.log('Listening on port ' + app.get(portName));
});
```

## To parse request bodies
```javascript
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended : true
}));
// To use JSON for body parsing
app.use(bodyParser.json());
```

## To import scripts for use in Front-end
```javascript
var path = require('path');
var scriptRootDirectory = 'public';
app.use(express.static(path.join(__dirname, scriptRootDirectory)));
```

## To parse the cookie
```javascript
var cookieParser = require('cookie-parser');
app.use(cookieParser());
```

## To set up a REST API
```javascript

```
