const express=require('express');
const mongoose= require('mongoose');

const router=express.Router()

const User=require('../models/user');

router.get('/allUser',(req,res,next)=>{
    User.find().exec().then(response=>{
        res.status(200).json({
            userList:response
        })
    })
})

router.post('/register',(req,res,next)=>{
    const user=new User({
        _id:new mongoose.Types.ObjectId,
        username:req.body.username,
        email:req.body.email,
        contact:req.body.contact,
        password:req.body.password,

    })
    User.findOne({email:req.body.email}).exec().then(response=>{
        console.log(response)
        if(response===null){
            user.save().then(response=>{
                res.status(200).json({
                    message:"User registerd successfully",
                    user:user
                })
            })
        }else{
            res.status(404).json({
                message:"Sorry! email id already exist , please try with other one"
            })
        }
    })
  
    
})

router.post('/login',(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    User.findOne({email:email,password:password}).exec().then(response=>{
        if(response!=null){
            res.status(200).json({
                message:"User login successfully",
                user:response
            })
        }else{
            res.status(404).json({
                message:"Auth failed",
                user:response
            })
        }
    })
})

router.delete('/delete/:userId',(req,res,next)=>{
    const _id=req.params.userId;
    User.findOne({_id:_id}).exec().then(response=>{
        if(response!=null){
             User.deleteOne({_id:_id}).exec().then(response=>{
                    res.status(200).json({
                        message: "User account deleted successfully"
                    })
    })
        }else{
            res.status(404).json({
                message:"No user exist with id "+_id
            })
        }
    })
   
   
})

router.patch('/update/:userId',(req,res,next)=>{
    const _id=req.params.userId;
    User.updateOne({_id:_id},{$set:req.body}).exec().then(response=>{
        res.status(200).json({
            message:"User profile uploaded successfullly"
        })
    })
})





module.exports=router