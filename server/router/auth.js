
const express = require("express");
const router = express.Router();
require("../db/conn");
const bcrypt = require("bcryptjs");
const User = require("../model/userSchema");

// const middleware=(req,res, next)=>{
//     console.log("hello middd")
//     next();
//   }

router.get("/", (req, res) => {
  res.send("hello Mers Server");
});
// login route
router.post("/sigin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    console.log(email);
    if (!email || !password) {
      return res.status(400).send("please fill");
    }
    const userLogin = await User.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, userLogin.password);
    
    if (!userLogin || !isMatch) {
        res.status(500).send("invalid");
    } else {
        console.log("brefore")
        token= await userLogin.generateAuthToken();
        console.log(token)
        res.cookie("jwttoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
        })
      res.status(200).send("successfully login");
    }
  } catch (err) {
    res.status(500).send("fai;");
  }
});
router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).send({ error: "plz filled the fileds properly" });
  }
  try {
    const useralready = await User.findOne({ email: email });
    if (useralready) {
      return res.status(422).send("already exsist");
    } else if (password !== cpassword) {
      return res
        .status(422)
        .send("Both password and confirm password are not same");
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      console.log("helloo")
      console.log(password)
      await user.save();
      console.log("helloo2")
      res.status(201).send("successfullu created");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: "failed" });
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
});

router.get("/about", (req, res) => {
  res.send("hello about");
});
router.get("/contact", (req, res) => {
  res.send("hello contact");
});
router.get("/signin", (req, res) => {
  res.send("hello contsigninact");
});
router.get("/signup", (req, res) => {
  res.send("hello signup");
});

module.exports = router;
