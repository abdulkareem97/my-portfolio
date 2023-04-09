import React, { useState } from 'react'
import { BsFillCircleFill, BsFillCaretLeftFill, BsSquareFill, BsBrowserChrome, BsYoutube, BsCameraFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import HomeScreen0 from '../pages/Home/HomeScreen0';
import HomeScreen1 from '../pages/Home/HomeScreen1';
import HomeScreen2 from '../pages/Home/HomeScreen2';
import axios from 'axios';


const Dashboard = ({bg}) => {
  const navigate = useNavigate()
  const [isScreen1,SetIsScreen1] = useState(1)

  const changeScreen=(value)=>{
    SetIsScreen1(value)

  }


  const openNotification = () => {
    navigate('/')

  }
  const HandleLock = () => {
    navigate('/')
  }
  const handleNavigation = (str)=>{
    // console.log('here')
    navigate('/'+str)
}
  return (
    <>
      <div className={`${bg} bg-cover bg-no-repeat h-screen relative overflow-hidden`}>
        <section id='header' className='text-sm flex justify-between px-3 py-3  text-white sticky'>
          <span>10:15 PM</span>
          <span className='border w-12 h-1 bg-white mt-2' onClick={openNotification}></span>

          <span className='text-[3mm] border px-[2mm] bg-slate-700'>100  </span>
        </section>

        <section id='container ' className='h-[80vh] ' onDoubleClick={HandleLock}>
            {isScreen1===0 &&  <HomeScreen0 changeScreen={changeScreen}/> }
            {isScreen1===1 &&  <HomeScreen1 changeScreen={changeScreen}/> }
            {isScreen1===2 &&  <HomeScreen2 changeScreen={changeScreen}/> }


        </section >

        <section id='scrollbar ' className='flex justify-center mb-1  '>
          <span className={`border w-12 h-1  bg-slate-600 mt-2 ${isScreen1==0 ? 'border-l-[16px]': isScreen1==2 ? 'border-r-[16px]' : ' bg-white'} transition-all border-white `} ></span>

        </section>

        <section id='bottomNavBar' className=''>
          <div className='grid grid-cols-3 col-span-3 text-4xl '>
            <div className='flex justify-center ' onClick={()=>handleNavigation('video')}> 
              <BsYoutube className='text-red-800' />
            </div>
            <div className='flex justify-center'>
              <BsBrowserChrome className='text-yellow-500' onClick={()=>handleNavigation('chrome')} />
            </div>
            <div className='flex justify-center'>
              <BsCameraFill className='text-white' onClick={()=>handleNavigation('photo')} />
            </div>

          </div>

        </section>

        {/* <section id='footer' className='absolute bottom-0 flex  w-full py-4 justify-around text-slate-400 text-lg'>
          <span>
            <BsSquareFill />

          </span>
          <span>
            <BsFillCircleFill />


          </span>
          <span>
            <BsFillCaretLeftFill />

          </span>

        </section> */}
      </div>
    </>
  )
}

export default Dashboard
