// url to use is http://localhost:8084/service?name=6ns

var express = require('express');
var app = express();
var http = require("http");
var bodyParser     =        require("body-parser");
var mysql =  require('mysql');
app.use(bodyParser.urlencoded({ extended: false }));
var connection =  mysql.createConnection({
	host : 'localhost',
 user : 'root',
 password:''
});


connection.connect();

connection.query('use frr');

var bodyParser     =        require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/service',function(req,res){
    res.send("hi");
    var id = req.query.name;
    console.log(id);
    var query =connection.query('insert into issue values ("'+id+'")',
    function (data) {
   
  console.log(query.sql);
 });

});

app.listen(8082);
console.log("Hello Welcome");
console.log("running");
