import React, { useEffect, useState } from 'react'
import logo from "../Images/laptop.jpeg"
import AboutData from './AboutData';
import { NavLink ,useNavigate } from "react-router-dom";
import Tab from './tab';
const About = () => {
const [adata,setAData]=useState({})
  const navigate=useNavigate()
  const callAboutPage = async()=>{
  try{
    console.log("data1")
      const res=await fetch('/about',{
        method:"GET",
        headers:{
           Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      })
      const data=await res.json()
      console.log( "data",data)
      if(!res.status===200){
        console.log("data2",data)
      }else{
        console.log("data3",data)
        setAData(data)
      }
  }catch(err){
    console.log("errs",err)
    navigate("/login")
  }
  }
  useEffect(()=>{
    callAboutPage();
  },[])
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { label: "About", content: <AboutData pdata={adata} /> },
    { label: "Profile", content: "NO DATA FOUND" },
  ];

  return (
    <>
         <div className="containers">
        

        <div className="sections1">
          <img src={logo} />
          <div className="details">
            <div className="aboutdetails">
              {/* <p className='itemabouts'> varun</p>
              <p className='itemabouts'> varun</p>
              <p className='itemabouts'> varun</p> */}
             
            </div>
          </div>
        </div>
        <div className="sections2">
          <div className="signin-contents">
            <p className="names">{adata.name}</p>
            <p className="des">{adata.work}</p>
          </div>
          <div>
            <div className="tab-buttons">
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  isActive={index === activeTab}
                  onClick={() => handleTabClick(index)}
                />
              ))}
            </div>
            <hr className="horizontal-line"></hr>
            <div className="tab-content">{tabs[activeTab].content}</div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default About
