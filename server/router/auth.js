const express =require("express");
const router = express.Router();



// const middleware=(req,res, next)=>{
//     console.log("hello middd")
//     next();
//   }
  
  router.get('/',(req,res)=>{
      res.send("hello Mers Server")
  })

  router.post('/register',(req,res)=>{
console.log(req.body);
res.json({message:req.body})
    //  res.send("hello Mers Server1")
})
  
  router.get('/about',(req,res)=>{
      res.send("hello about")
  })
  router.get('/contact',(req,res)=>{
      res.send("hello contact")
  })
  router.get('/signin',(req,res)=>{
      res.send("hello contsigninact")
  })
  router.get('/signup',(req,res)=>{
      res.send("hello signup")
  })

module.exports=router;