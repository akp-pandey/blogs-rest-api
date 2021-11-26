const http=require('http');
const app=require('./app')

const port=process.env.port || 3000;

const server=http.createServer(app);

server.listen(port,function(error){
    if(error) throw error
    console.log("Server started at port ",3000);
});