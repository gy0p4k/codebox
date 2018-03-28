'use strict'

const express = require('express')
const cmd = require('node-cmd')
const shell = require('shelljs');
const bodyParser = require('body-parser');
const crypto = require('crypto')
const app = express()
const token = crypto.randomBytes(8).toString('hex');
console.log("Your token: " + token);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use('/static', express.static('static'));


app.get("/", function(req, res){
  res.sendFile(__dirname + '/static/login.html');
});


app.get("/editor/:token", function(req, res){
  res.sendFile(__dirname + (req.params.token == token ? '/static/index.html' :  '/static/login.html' ))
});


app.get('/tree', function(req, res) {
  let runCommand = function (command) {
	shell.exec(command, function(err, data, stderr){
		let returnList = [];
        data.split(/\r?\n/).forEach(function (element) {
        	returnList.push(element);
        })
        res.send(returnList);
    }
	);
}
  runCommand("ls | xargs -n 1 basename");
});

app.get('/status', function(req, res) {
  let runCommand = function (command) {
        shell.exec(command, function(err, data, stderr){
                let returnList = [];
        data.split(/\r?\n/).forEach(function (element) {
                returnList.push(element);
        })
        res.send(returnList);
    }
        );
}
  runCommand("top -bcn1 -w512");
});


app.get('/cd/:where', function(req, res) {
  let runCommand = function (command) {
	shell.exec(command, function(err, data, stderr){
		let returnList = [];
        data.split(/\r?\n/).forEach(function (element) {
        	returnList.push(element);
        })
        res.send(returnList);
    }
	);
}
  shell.cd(req.params.where == "<<<" ? ".." : req.params.where)
  runCommand("ls | xargs -n 1 basename");
});

app.get('/file/:file', function(req, res) {
  let runCommand = function (command) {
	shell.exec(command, function(err, data, stderr){
        res.send({"content": data});
    }
	);
  }
  runCommand("cat " + req.params.file);
});

app.post('/save', function(req, res) {
  console.log(req.body)
  let runCommand = function (command) {
  shell.exec(command, function(err, data, stderr){
        res.send({"status": "saved"});
    }
  );
  }
  runCommand("echo \"" + req.body.content +"\" >" + req.body.name);
});


app.listen(8080, () => console.log('port 80!'))
