const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log("Im am the Middleware..amogh bro")
    next();
})
app.use(function(req,res,next){
    console.log("amogh bro.. FAX KAARO")
    next();
})

app.get('/',function(req,res){
    res.send("Hello amogh, okh Brooooooooooooooooooooo;., Oooh FAx FAX DAX")
})
app.get('/message',function(req,res){
    res.send("Chill//////  scennnnne broo0000000000..")
})
app.get('/profile',function(req,res,next){
    return next(new Error("These is an Error"))
    res.send("Amoghhh and So..me onee")

})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("Something went wrong!")
})

app.listen(3000)