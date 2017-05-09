var express = require('express');
var router = express.Router();
var quotationModel = require('../model/quotation');


router.get('/getQuotations', function (req, res) {
    console.log('getQuotations hit!');
    quotationModel.find({}).then(function(_quotes){
        res.jsonp({'message':'Success',object:_quotes});
    })

});

module.exports = router;