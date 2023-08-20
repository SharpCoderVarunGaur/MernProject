import React, { useEffect, useLayoutEffect, useState } from 'react'
import logo from "../Images/laptop.jpeg"
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
const Home = () => {
 
 const location=useLocation()
 const [adata,setAData]=useState({})
 const handleData=async()=>{
  try{
    const res=await fetch('/GETITEM',{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }

    })
    const data=await res.json()
    if(!res.status===200){
      console.log("data2",data)
    }else{
      console.log("data3",data)
      setAData(data)
    }
}catch(err){
  console.log("errs",err)
 }
}
useLayoutEffect(()=>{
  handleData();
})

  return (
   <>
      <div className='home-page'>
        <div className='home-div'>
          <p className='pt-5'>{`Welcome ${adata.name ? adata.name :"USER"}`}</p>
          <h1>{`We Are The ${adata.work ?adata.work :"MERN DEVELOPER" }`} </h1>
        </div>
      </div> 
   </>
  )
}

export default Home
