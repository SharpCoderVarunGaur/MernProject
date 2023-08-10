const express =require("express");
const router = express.Router();
require('../db/conn')
const User =require('../model/userSchema')


// const middleware=(req,res, next)=>{
//     console.log("hello middd")
//     next();
//   }
  
  router.get('/',(req,res)=>{
      res.send("hello Mers Server")
  })
  router.post('/register',async(req,res)=>{
    // console.log(req.body);
    const {name,email,phone,work,password,cpassword}= req.body;
    if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
       return res.status(422).send({error:'plz filled the fileds properly'})
    }
    try{
    const useralready=  await User.findOne({email:email})
    if(useralready){
        return res.status(422).send("already exsist")
    }
    const user =new User({name,email,phone,work,password,cpassword})
    const saveData= await user.save()
    res.status(201).send("successfullu created")
    }catch(err){
        res.status(500).send({err:"failed"})
    }

    // User.findOne({email:email}).then((userExist)=>{
       
    //     // const user =new User(req.body)
    //     const user =new User({name,email,phone,work,password,cpassword})
    //     user.save().then(()=>{
    //         res.status(201).json({success:"created"})
    //     }).catch((err)=>{
    //         res.status(500).json({err:"failed"})
    //     })
    
    // }).catch((err)=>{
    //     console.log(err)
    // })

//   router.post('/register',(req,res)=>{
// // console.log(req.body);
// const {name,email,phone,work,password,cpassword}= req.body;
// if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
//    return res.status(422).json({error:'plz filled the fileds properly'})
// }
// User.findOne({email:email}).then((userExist)=>{
//     if(userExist){
//         return res.status(422).json({error:"User already exsist"})
//     }
//     // const user =new User(req.body)
//     const user =new User({name,email,phone,work,password,cpassword})
//     user.save().then(()=>{
//         res.status(201).json({success:"created"})
//     }).catch((err)=>{
//         res.status(500).json({err:"failed"})
//     })

// }).catch((err)=>{
//     console.log(err)
// })
// res.json({message:req.body})
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