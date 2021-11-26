const express=require('express');
const mongoose= require('mongoose');
const { response } = require('../../app');
const Blogs=require('../models/blog');


const router=express.Router()

router.post('/addBlog',(req,res,next)=>{
   const blog=new Blogs({
       _id:new mongoose.Types.ObjectId,
       userName:req.body.userName,
       userId:req.body.userId,
       blogTitle:req.body.blogTitle,
       blogContent:req.body.blogContent,
       blogLikes:req.body.blogLikes,
       blogDislikes:req.body.blogDislikes

   })

   blog.save().then(response=>{
       res.status(200).json({
           message:"Blogs added successfully",
           blogDetail:blog
       })
   })
})

router.get('/allBlogs',(req,res,next)=>{
    Blogs.find().exec().then(response=>{
        res.status(200).json({
            message:"Fetched all blogs",
            blogList:response
        })
    });
 
})

router.get('/myBlogs/:userId',(req,res,next)=>{
    const id=req.params.userId;
    Blogs.find({userId:id}).exec().then(response=>{
        res.status(200).json({
            message:"All blogs fetched of particular user",
            myBlogList:response
        })
    })
})

router.delete('/deleteBlog',(req,res,next)=>{
    const blogId=req.body.blogId;
    const userId=req.body.userId;
    Blogs.deleteOne({_id:blogId},{userId:userId}).exec().then(response=>{
        res.status(200).json({
            message:"Blog deleted successfully"
        })
    })

})

router.patch('/updateBlog/:blogId',(req,res,next)=>{
    const blogId=req.params.blogId;
    Blogs.updateOne({_id:blogId},{$set:req.body}).exec().then(response=>{
        res.status(200).json({
            message:"Blog updated successfully"
        })
    })
})

module.exports=router