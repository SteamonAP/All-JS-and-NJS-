const mongoose = require('mongoose');
const Joi = require('joi');

const studentSchema = new mongoose.Schema({
    name : {type : String, required : true, minlength : 3, maxlength: 30},

    isEnrolled:{
        type : Boolean,
        default : false
    },
    phone:{
        type: String,
        required : true,
        minlength : 10,
        maxlength: 25
    }

}); 

const Student = mongoose.model('Student',studentSchema)


function validateData(student) {
    const schema = {
        name: Joi.string().min(3).max(50).required(), // Corrected Joi.String() to Joi.string()
        isEnrolled: Joi.boolean().required(),
        phone: Joi.string().min(10).max(10).required()
    };

    return Joi.validate(student, schema); // Corrected Schema to schema
}


exports.Student = Student;
exports.validate = validateData;