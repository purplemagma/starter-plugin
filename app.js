var port = 34212;
var localServerName = "localhost.intuit.com:"+port;

var express = require("express");
var https = require("https");
var path = require("path");
var fs = require("fs");
var cors = require("cors");

var app = express();

// all environments
app.set("port", process.env.PORT || port);
app.use(express.logger());
app.use(cors());
app.options("*", cors());
app.use("/", express.static(__dirname+"/src"));

if ("development" == app.get("env")) {
  app.use(express.errorHandler());
}

var privateKey = fs.readFileSync("sslcert/server.key");
var certificate = fs.readFileSync("sslcert/server.crt");

var options = {key: privateKey, cert: certificate};

https.createServer(options, app).listen(app.get("port"), function(){
  console.log("Visit https://localhost.intuit.com:"+app.get("port"));
});
