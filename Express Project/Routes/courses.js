const {Course,validate} = require('../models/courcesModel');
const {Category} = require('../models/categoriesModel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/',async(req,res)=>{
    const courses = await Course.find();
    res.send(courses);
});

router.post('/',async(req,res)=>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const category = await Category.findById(req.body.categoryId)
    if (!category) return res.status(400).send('Invalid Id')

    let course = new Course({
        title: req.body.title,
        category: {
            _id : category._id,
            name : category.name

        },
        creator: req.body.creator,
        rating: req.body.rating
    });

    course = await course.save();

    res.send(course);
});

router.put('/:id',async(req,res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const category = await Category.findById(req.body.categoryId)
    if (!category) return res.status(400).send('Invalid Id')

    const course = await Course.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            category: {
                _id : category._id,
                name : category.name

            },
            creator: req.body.creator,
            rating: req.body.rating
        },{new:true});
    if (!course) return res.status(400).send('The coures this Id not found.');
    
    res.send(course);


});

router.delete('/:id', async(req, res) =>{
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) return res.status(400).send('The course with this Id not found.');
    res.send(course);
});

router.get('/:id', async(req,res) => {
    const course = await Course.findById(req.params.id);

    if (!course) return res.status(400).send('The course with Id not found');

    res.send(course);
});



module.exports = router;


