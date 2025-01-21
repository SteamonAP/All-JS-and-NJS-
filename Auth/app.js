const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

// bcrypt code----->
// bcrypt.genSalt(saltRounds, function(err,salt){
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash){
//         store hash in your password DB
//     })
// })

app.use(cookieParser());

app.get("/",function(req,res){
    
    // bcrypt.genSalt(10, function(err,salt){
    //     bcrypt.hash("Steamonap@123",salt,function(err,hash){
    //         console.log(salt);
    //         console.log(hash);
    //         console.log(hash.length)
    //     })
    // })
    // bcrypt.compare("Steamonap@123","$2b$10$.ugnNsfA4CQhbQsFgEkuHeMxJT16m53gxVk.fmb327H8CryChkady",function(err,result){
    //     console.log(result);
    // })
    let token = jwt.sign({email: "amoghpitale7@gmail.com"},"secret");
    res.cookie("token",token);
    console.log(token);
    res.send("done");
})
app.get("/learn",function(req,res){
    console.log(req.cookies);
    console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send("Hogaya bhai")

})
app.listen(3000);