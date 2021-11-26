const bodyParser = require('body-parser');
const express=require('express')
const mongoose=require('mongoose')

const app= express();
const userRoutes=require('./api/routes/user');
const blogRoutes=require('./api/routes/blogs');

mongoose.connect("mongodb+srv://test:test@cluster0.ykatt.mongodb.net/test?retryWrites=true&w=majority")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user',userRoutes);
app.use('/blog',blogRoutes);

module.exports=app