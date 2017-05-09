var express = require('express');
var bodyParser = require('body-parser');
var app =  express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://varun:varun@ds133251.mlab.com:33251/our-db');

var userController = require('./controller/user');
var quotationsController = require('./controller/quotations');

app.use(bodyParser.json());
app.use('/user',userController);
app.use('/quotations',quotationsController);

var port = (process.env.PORT || 3003);

app.listen(port,function(){
	console.log('Server running on -- '+port);
	console.log('accepting client requests!!');
});
