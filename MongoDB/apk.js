// const express = require('express');
// const app = express();

// const userModel = require('./usermodel.js');

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// });
// app.get("/create",async (req,res)=>{
//     let createduser = await userModel.create({
//         name: "Sumant Bhise",
//         username: "Shadow",
//         email: "sumantbhise@gmail.com",
//         age: 21
//     })

//     res.send(createduser);

// });
// app.get("/update",async (req,res)=>{
//     let updateduser = await userModel.findOneAndUpdate({username: "Steamon"},{name: "Amogh Prashant Pitale"},{new:true});

//     res.send(updateduser);
// });

// app.get("/read",async (req,res)=>{
//     let users = await userModel.find();
//     res.send(users); 
// });
// app.get("/delete",async (req,res)=>{
//     let deleteeduser = await userModel.findOneAndDelete({username: "Shadow"})
//     res.send(deleteeduser); 
// });

// app.listen(3000);




