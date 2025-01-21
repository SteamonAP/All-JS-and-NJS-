const mongoose = require('mongoose')
const Functions = require('night-api/lib/functions')

mongoose.connect('mongodb+srv://amogh:amogh@cluster0.qs0cx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log('Connected to DB'))
.catch((err)=> console.error("Coudnt connect to db",err))


//Schema


const courseSchema = new mongoose.Schema({
    name: {type:String, required:true, minLength: 3, maxLength: 8},
    category:{type: String,
        required: true,
        enum: ['web', 'mobile', 'desktop', 'game','general','learning','server'],
    },
    tags: {
        type: Array,
        validate:{
            validator: function(tags) {
                return tags.length > 1
            }
        }
    },
    creator: {type:String,required:true},
    publishedDate: {type:Date, default:Date.now},
    isPublished: {type:Boolean,required:true},
    rating: {type:Number,required: function(){return this.isPublished}}
})

const Course = mongoose.model('Course',courseSchema)

async function createCourse() {
    const course = new Course({
        name: "GraphQL",
        category: "server",
        tags: ["WebDev"],
        creator: "Amogh",
        isPublished: true,
        rating: 4.1

       
    })

    try {
        await course.validate();
        await course.save();
        console.log(course);
        
    } catch (error) {
        for(field in error.errors){
            console.log(error.errors[field])
        }
        
    }
    
    // const result = await course.save()
    // console.log(result)
    
}
createCourse()


// async function getCources(){
//     const courses = await (await Course.find({rating: {$in: [2.2,4.5]}}).select({name:1,creator:1})).or([{creator: "Sumant"}])

//     console.log(courses)
    
// }

// getCources()


async function updateCourse(id) {
    const course = await Course.findById(id)

    if(!course) return;

    // course.name = "Cooking"
    // course.creator = "Shakya"
    // course.rating = "3.5"
    course.category = "learning"

    const updatedCourse = await course.save();

    console.log(updatedCourse);
    
}

// updateCourse("66f6ad9668ec8754f7839458")


async function deleteCourse(id) {

    const course = await Course.findByIdAndDelete(id);
    console.log(course)

    
}

// deleteCourse("66f6ad2e3dd1b37e1657b58d")