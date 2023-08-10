const express =require("express");
const mongoose=require("mongoose");
const app =express();
const port =process.env.PORT||3000;

const DB="mongodb+srv://varungaur408:Harshita1608@cluster0.5f5xuas.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB).then(()=>{
   console.log("connection successfull");
}).catch((err)=>{
  console.log(err)
  })

//Middelware

const middleware=(req,res, next)=>{
  console.log("hello middd")
  next();
}

app.get('/',(req,res)=>{
    res.send("hello Mers")
})

app.get('/about',middleware,(req,res)=>{
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