import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from '../Images/IMG_20200702_203712_884.jpg'
const Navbar = () => {
  return (
   <>

    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="#">

        <img height="50px" src={logo} alt=""
        />
    </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>
    </ul>
    
  </div>
</nav> */}
<nav className='navbar backround h-nav'>
<ul className="nav-list v">
  <div className='logo'><img  src={logo} alt=''/> </div>
        <li >
        <NavLink className="nav-link" to="/">Home </NavLink>
        </li>
       <li >
        <NavLink className="nav-link"   to="/about">About</NavLink>
       </li>
      <li >
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
       </li>
      <li >
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>
</ul>
{/* <div className='rightNav v'>
<input
        type="text"
        id="search"
        name="search"
        // value={inputValue}
        // onChange={handleInputChange}
      />
     <button className='btn btn-sm'>Click Me</button>
</div> */}
<div className='burger'>
  <div className='line'></div>
  <div className='line'></div>
  <div className='line'></div>
</div>

</nav>

   </>
  )
}

export default Navbar
