const express = require('express')
const myMiddleware = require('./middlewares/middle')


const app = express()

//get,post,put,delete methods in express

app.use(express.json())

app.use(myMiddleware)


let courses = [
    {id:1, name:'java', coursePrice:'1000'},
    {id:2, name:'javaScript', coursePrice:'2000'},
    {id:3, name:'C++', coursePrice:'3500'},
]

app.get('/' ,(req , res)=>{
    res.send("Hello this is King Amogh")
})

app.get('/about',(req,res)=>{
    res.send("We are the one who knock")
})
app.get('/contact',(req,res)=>{
    res.send("my number is 9004882822 and email : amp@gmail.com")
})

app.get('/courses' , (req , res)=>{
    res.send(courses)
})

app.post('/courses' , (req , res)=>{
    const course ={
        id : courses.length + 1,
        name : req.body.name,
        coursePrice : req.body.coursePrice
    }
    courses.push(course)
    res.send(course)
})

//put method
app.put('/courses/:courseName', (req,res)=>{
    let course = courses.find(course => course.name === req.params.courseName)
    if(!course) res.status(404).send(`The course you are looking for doesnot exist Error: ${404}`)
    
        

    course.name = req.body.name         
    course.coursePrice = req.body.coursePrice
    res.send(course)         
})

//delete method
// app.delete('/courses/:courseName', (req,res)=>{
//     let UpdatedCourses = courses.filter(course => course.name != req.params.courseName)
//     courses = UpdatedCourses
//     res.send(courses)
// })

app.delete('/courses/:id' ,(req,res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course)res.status(404).send("Error")
    const index = courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)        
})

//routing params

app.get('/courses/:courseName',(req, res)=>{
    let course = courses.find(course => course.name === req.params.courseName)
    if(!course) res.status(404).send(`The course you are looking for doesnot exist Error: ${404}`)


    res.send(course) 
})




const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})