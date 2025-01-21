const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/testapp1");

const userSchema = new mongoose.Schema({
    name: {type:String, required: true,minlength: 3, maxlength:8},
    email: {type: String, required: true},
    image: {type: String, required: true}

});

module.exports = mongoose.model('user',userSchema);