const jwt=require("jsonwebtoken");
const User = require("../model/userSchema");
const Authenticate=async(req,res,next)=>{
try{
const token=req.cookies.jwtoken;
const verify=jwt.verify(token,process.env.SECRETE_KEY)
const rootUser=await User.findOne({_id:verify._id , "tokens.token":token})
if(!rootUser){throw new Error('User not Found')}
req.token=token;
req.rootUser=rootUser;
req.userID=rootUser._id
next()
}catch(err){
    res.status(401).send('Unauthorized:No token provided')
console.log("err",err)
}
}
module.exports=Authenticate;