const Joi = require('joi');
const { required } = require('joi/lib/types/lazy');
const { type } = require('joi/lib/types/object');
const mongoose = require('mongoose');
const {categorySchema} = require('../models/categoriesModel')

const Course = mongoose.model('Course', new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 15
    },
    category: {
        type : categorySchema,
        required : true

    },
    creator: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
}));

function validateCourse(course){

    const schema = {
        title: Joi.string().min(5).max(20).required(),
        categoryId: Joi.string().required(),
        creator: Joi.string().min(5).required(),
        rating: Joi.number().min(5).required()
    };

    return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validate = validateCourse;