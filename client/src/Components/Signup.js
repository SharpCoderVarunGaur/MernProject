import React ,{useState} from "react";
import logo from '../Images/laptop.jpeg'
import { NavLink ,useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate=useNavigate()
  const [userData,setUserData]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })
  let name ,value;
  const handleInput=(e)=>{
   console.log(e)
   name=e.target.name;
   value=e.target.value
   setUserData({...userData,[name]:value})
  }
  const PostData =async (e)=>{
         e.preventDefault();
         const{name,email,phone,work,password,Cpassword}=userData;
         const res =  await fetch("/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(
            {
              name:name,email:email,phone:phone, work:work,password:password,cpassword:Cpassword
          
          })
         })
         const data =await res
         if(data.status===422 || !data ){
          window.alert("Invalid Registraion")
         }else{
          window.alert("Successfull Registraion")
          navigate("/login")
         }
  }
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">signup</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={userData.name}
                    onChange={handleInput}
                    placeholder="your Name"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={userData.email}
                    onChange={handleInput}
                    placeholder="your Email"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autocomplete="off"
                    value={userData.phone}
                    onChange={handleInput}
                    placeholder="your phone"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autocomplete="off"
                    value={userData.work}
                    onChange={handleInput}
                    placeholder="your work"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={userData.password}
                    onChange={handleInput}
                    placeholder="your password"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="Cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="Cpassword"
                    id="Cpassword"
                    autoComplete="off"
                    value={userData.Cpassword}
                    onChange={handleInput}
                    placeholder="your Cpassword"
                  ></input>
                </div>
                <div className="form-group from-button">
                <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={PostData}
                  ></input>
                </div>
              </form>
            </div>
              <div className="signup-image">
                <figure>
                  <img src={logo} />
                </figure>
                <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
              </div>
          </div>
        </div>
      </section>
      {/* <section className='backround firstSection'>
   <div className='box-main'>
   <h1 className='heading'>SignUp</h1>
  
    <div className='firstHalf'>
    <form className='register-form'>
    

    <div className='label'>   
    <label >
     <AccountBoxIcon/>
    </label> 
    <input className='inputSignUp'
        type="text"
        id="signup"
        name="signup"
        placeholder='Your Name'
        // value={inputValue}
        // onChange={handleInputChange}
      />
    </div>
    <div className='label'>   
    <label >
     <EmailIcon/>
    </label> 
   
       <input className='inputSignUp'
        type="text"
        id="signup"
        name="signup"
        placeholder='Email'
        // value={inputValue}
        // onChange={handleInputChange}
      />
    </div>
    <div className='label'>   
    <label >
     <PhoneAndroidIcon/>
    </label> 
       <input className='inputSignUp'
        type="text"
        id="signup"
        name="signup"
        placeholder='Mobile Number'
        // value={inputValue}
        // onChange={handleInputChange}
      />
    </div>
    <div className='label'>   
    <label >
     <AccountBoxIcon/>
    </label> 
   
       <input className='inputSignUp'
        type="text"
        id="signup"
        name="signup"
        placeholder='Your Profession'
        // value={inputValue}
        // onChange={handleInputChange}
      />
    </div>
    <div className='label'>   
    <label >
     <LockOpenIcon/>
    </label> 
   
       <input className='inputSignUp'
        type="text"
        id="signup"
        name="signup"
          placeholder='Your Password'
        // value={inputValue}
        // onChange={handleInputChange}
      />
    </div>
    <div className='label'>   
    <label >
     <LockOpenIcon/>
    </label> 
       <input className='inputSignUp'
        type="text"
        id="signup"
        name="signup"
        placeholder='Your Confirm Password'
        // value={inputValue}
        // onChange={handleInputChange}
      />
    </div>
    <Button variant="contained">Contained</Button>
    </form>
      
    </div>
    {/* <div className='secondHalf'>
      <img src={logo}  alt=''/>
    </div> */}

      {/* </div>
 </section> */}
    </>
  );
};

export default Signup;
