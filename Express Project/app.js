const express = require('express')
const mongoose = require('mongoose')
const categories = require("./Routes/categories.js")
const students = require("./Routes/students.js")
const courses = require("./Routes/courses.js");
const app = express()




mongoose.connect('mongodb+srv://amogh:amogh@cluster0.qs0cx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log("Connection to database Successful"))
.catch((err)=> console.log("Coudnt connect",err))
app.use(express.json())
app.use('/api/categories',categories)
app.use('/api/students',students)
app.use('/api/courses',courses)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

