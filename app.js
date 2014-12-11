var port = 34212;
var localServerName = "localhost.intuit.com:"+port;

var express = require("express");
var morgan = require("morgan");
var https = require("https");
var path = require("path");
var fs = require("fs");
var cors = require("cors");

var app = express();

// all environments
app.set("port", process.env.PORT || port);
app.use(morgan('combined'));
app.use(cors());
app.options("*", cors());
app.use("/", express.static(__dirname+"/src"));

if ("development" == app.get("env")) {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

var privateKey = fs.readFileSync("sslcert/server.key");
var certificate = fs.readFileSync("sslcert/server.crt");

var options = {key: privateKey, cert: certificate};

https.createServer(options, app).listen(app.get("port"), function(){
  console.log("Visit https://localhost.intuit.com:"+app.get("port"));
});
