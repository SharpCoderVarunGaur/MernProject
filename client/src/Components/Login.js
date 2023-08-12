import React from 'react'
import logo from '../Images/laptop.jpeg'
import { NavLink } from "react-router-dom";
const Login = () => {
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
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="off"
                    placeholder="your Email"
                  ></input>
                </div>
               
                
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
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
