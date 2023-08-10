const express =require("express");
const app =express();
const port =process.env.PORT||3000;
app.get('/',(req,res)=>{
    res.send("hello Mers")
})

app.get('/about',(req,res)=>{
    res.send("hello about")
})
app.get('/contact',(req,res)=>{
    res.send("hello contact")
})
app.get('/signin',(req,res)=>{
    res.send("hello contsigninact")
})
app.get('/signup',(req,res)=>{
    res.send("hello signup")
})
app.listen(port,()=>{
    console.log(`server is started ${port}`);
})