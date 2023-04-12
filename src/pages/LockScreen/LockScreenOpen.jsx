import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const LockScreenOpen = () => {
  const [showNotification,setShowNotification] = useState('my-component')
  // useEffect(() => {
  //   const script = document.getElementById('aisensy-wa-widget')
  //   console.log(" script  ",script)
  //   document.body.removeChild(script)
  // }, []);
  const navigate = useNavigate()

    const handleScreen = ()=> {
      navigate('/')
       

    }
    const openNotification = ()=>{
      navigate('/openNotification')

    }

    const handleUnlock = ()=>{
      if(false)
      {

      }
      else{
        navigate('/dashboard')
      }
    }

  
  
  return (
    <div  
    className='bg-bg2 bg-cover bg-no-repeat h-screen relative text-white'  onDoubleClick={handleScreen} >
        <section id='header'  className='text-sm flex justify-between px-3 pt-2 pb-1  text-white sticky' >
                <span>10:15 PM</span>
                <span className='border w-12 h-1 bg-white mt-2' onClick={openNotification}></span>
                <span className='text-[3mm] border px-[2mm] bg-slate-700'>100  </span>
        </section>
        <div className='flex flex-col pt-16 items-center '>
          <span className='text-5xl'>12:24</span>
          <span>Friday 07/04</span>

        </div>
        <div className='flex  justify-center'>
          <span>AKM</span>
        </div>

       
        <section id='footer' className='absolute bottom-2 flex  w-full py-2 justify-around text-lg'>
            <span>

            

            </span>
            <span onClick={handleUnlock}>
              click Here To unlock
            


            </span>
            <span>
           

            </span>

        </section>



       
      
    </div>
  )
}

export default LockScreenOpen
