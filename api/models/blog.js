const mongoose=require('mongoose');

const blogSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    userName:String,
    userId:String,
    blogTitle:String,
    blogContent:String,
    blogLikes:Number,
    blogsDislikes:Number
})

module.exports=mongoose.model("Blogs",blogSchema)