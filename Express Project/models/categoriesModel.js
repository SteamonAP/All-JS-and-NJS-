const mongoose = require('mongoose') 
const Joi = require('joi'); // Joi with lowercase 'j' for string()
const categorySchema = new mongoose.Schema({
    name : {type : String, required : true, minlength : 3, maxlength: 30}

})

const Category = mongoose.model('Category',categorySchema)

function validateData(category) {
    const schema = {
        name: Joi.string().min(3).required() // Corrected Joi.String() to Joi.string()
    };

    return Joi.validate(category, schema); // Corrected Schema to schema
}

exports.Category = Category
exports.validate = validateData
exports.categorySchema = categorySchema 