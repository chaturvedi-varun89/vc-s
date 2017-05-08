var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    number: Number
});

var UserModal = mongoose.model('UserModal', UserSchema);

module.exports = UserModal;