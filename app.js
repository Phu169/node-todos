var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");

var config = require("./config");

var app = express();
var port = process.env.PORT || 3000;

app.use("/asset", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.set("view engine", "ejs");

//db info
//console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true });


app.get("/", function (req, res) {
    res.render("index");
});

app.listen(port, function () {
    console.log("App listening on port : " + port);
});