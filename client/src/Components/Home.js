import React from 'react'
import logo from "../Images/laptop.jpeg"
const Home = () => {
  return (
   <>
 

 <section className='backround firstSection'>
   <div className='box-main'>
    <div className='firstHalf'>
      <p className='text-big'>The future of Education is here</p>
      <p className='text-small'>In this world of 7 billion people we need to educate this is the future of world</p>

     <div className='button'>
      <button className='btn'>Subscriber</button>
     </div>
    </div>
    <div className='secondHalf'>
      <img src={logo}  alt=''/>
    </div>
     
   </div>
 </section>
   <section className='secRight'>
    <p className='sectionTag'>The end of your search if here</p>
      <p className='sectionSubTag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.</p>
          <div className='thumbnail'>
             <img src={logo}  alt=''/>
          </div>
   </section>

   </>
  )
}

export default Home
