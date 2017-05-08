var express = require('express');
var router = express.Router();
var userModal = require('../model/user');

router.post('/addNumber',function (req,res) {
    var numbber = req.body.number;

    var newUser = new userModal({
        number : numbber
    });

    newUser.save().then(function(_user){
        res.jsonp({'message':'Success',object:_user});
    })
});

router.get('/getNumbers', function (req, res) {
    userModal.find({number:10}).then(function(_users){
        res.jsonp({'message':'Success',object:_users});
    })

});

module.exports = router;