const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    username:String,
    email:String,
    contact:String,
    password:String
});

module.exports=mongoose.model('User',userSchema);