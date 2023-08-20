import React, { useState } from 'react'
import logo from '../Images/laptop.jpeg'
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  const PostData=async(e)=>{
    e.preventDefault();
    const res =  await fetch("/sigin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(
        {
          email:email,password:password
      
      })
     })
     const data =await res
     if(data.status===200){
      window.alert("Successfull Login")
      navigate("/")
     }else{
      window.alert("Invalid Login")
     }
  }
  return (
    <>
          <section className="sign-in">
        <div className="container mt-5">
        
          <div className="signin-content">
          <div className="signin-image">
                <figure>
                  <img src={logo} />
                </figure>
                <NavLink to="/signup" className="signin-image-link">Create an Account</NavLink>
              </div>
            <div className="signin-form">
              <h2 className="form-title">signin</h2>
              <form className="register-form" id="register-form">
              
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
                    autocomplete="off"
                    placeholder="your Email"
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
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                    autocomplete="off"
                    placeholder="your password"
                  ></input>
                </div>
                <div className="form-group from-button">
                <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    onClick={PostData}
                    value="Log in"
                  ></input>
                </div>
              </form>
            </div>
             
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
