const express = require('express')
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/create",async function(req,res){
    let user = await userModel.create({
        username: "Amogh bhai",
        email: "amogh@gmail.com",
        age: 20

    })
    res.send(user);

})
app.get("/post/create",async function(req,res){
    let post = await postModel.create({
        postdata: "hello amogh bhai jaan",
        user: "677789dd23cfdb4daa510d70"

    })
    let user = await userModel.findOne({_id: "677789dd23cfdb4daa510d70"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))