import React from 'react'

const AboutData = (props) => {
  console.log("props",props)
  return (
    <>
         <div className="Abouts">
          <div className='Aboutdatas'>
           <p className='itemdatas'>UserID</p>
           <p className='itemdatas'> Name</p>
           <p className='itemdatas'> Email</p>
          <p className='itemdatas'> Phone</p>
         <p className='itemdatas'> Profession</p>

          </div>
          <div className='AboutInfos Aboutdatas'>
          <p className='itemInfos itemdatas'>{props.pdata._id}</p>
           <p className='itemInfos itemdatas'>{props.pdata.name}</p>
           <p className='itemInfos itemdatas'>{props.pdata.email}</p>
          <p className='itemInfos itemdatas'>{props.pdata.phone}</p>
         <p className='itemInfos itemdatas'>{props.pdata.work}</p>
          </div>
          </div>
    </>
  )
}

export default AboutData
