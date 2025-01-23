const { name } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amogh:amogh@cluster0.qs0cx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log('Connected to DB'))
.catch((err)=> console.error("Coudnt connect to db",err))

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    profilepic: {
        type: String,
        default: "userimg.png"
    },
    posts: [
        {
            type : mongoose.Schema.ObjectId, ref: "post"
        }
    ],
});

module.exports = mongoose.model('user', userSchema);


