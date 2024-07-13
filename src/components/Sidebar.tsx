import React from 'react'

const Sidebar = () => {





  return (
    <div className='h-full w-full text-center bg-black  text-white flex flex-col justify-between align-middle p-2'>
      
      <div className='text-xl'>Job Board</div>
      

      <div>
        <div id="homebutton" className='active m-auto w-1/2'>Home</div>
        <div id="aboutus" className='m-auto w-1/2'>About Us</div>
      </div>


      <div id="pp" className='w-8/9 bg-white text-black h-1/5 rounded-sm flex flex-col justify-start items-center'>
        <img src="./assets/images/examplepp.jpeg" alt="ProfilePicture" className='rounded-full w-1/3 h-1/3 m-1 object-cover' />
        <div>My Profile</div>
        <div>Settings</div>
        <div>Signout</div>
      </div>
    </div>
  )
}

export default Sidebar