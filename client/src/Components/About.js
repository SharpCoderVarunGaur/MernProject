import React from 'react'
import logo from "../Images/romeo2.jpg"
const About = () => {


  return (
    <>
         <div className='container emp-profle'>
            <from method="">
             <div className='row'> 
              <div className='col-md-4'>
               <img width="50%" height="40%" src={logo}/>
              </div>

              <div className='col-md-6'>
               <div className='profile-head'>
                     <h5>
                      web Developer
                     </h5>
                     <p className='profile-rating mt-3 mb-5'>RankingS: <span> 1/10</span></p>
                     <ul className='nav nav-tabs' role='tablist'>
                     <li className='nav-item'>
                      <a className='nav-link active' id="home-tab" data-toggle="tab" href='#home' role="tab">About</a>

                      </li> 
                      <li className='nav-item'>
                      <a className='nav-link active' id="profile-tab" data-toggle="tab" href='#profile' role="tab">About</a>

                      </li> 
                     </ul>
               </div>
              </div>
              
             </div>

            </from>
         </div>
    </>
  )
}

export default About
