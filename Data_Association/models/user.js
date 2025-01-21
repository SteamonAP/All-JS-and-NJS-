const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amogh:amogh@cluster0.qs0cx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log('Connected to DB'))
.catch((err)=> console.error("Coudnt connect to db",err))

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: String, required: true},
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})

module.exports = mongoose.model('user',userSchema);