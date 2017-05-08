var express = require('express');
var bodyParser = require('body-parser');
var app =  express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://varun:varun@ds133251.mlab.com:33251/our-db');

var userController = require('./controller/user');

app.use(bodyParser.json());
app.use('/user',userController);

app.listen(3003,function(){
	console.log('Server running on 3003');
});
