import React, { useEffect, useState } from 'react'
import { IoNotificationsCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const LockScreenNotification = () => {
  const navigate = useNavigate()

  const str = "Created By Akm";
  const  [str2,setStr2] = useState("");

  


  useEffect(()=>{
    let i = 0;
    let str3="";
    const intervalId = setInterval(() => {
      if (str3.length == str.length) {
        console.log('here')
        clearInterval(intervalId);
        return;
      }
      str3 += str[i];
      setStr2(str3)
      // console.log(str2); // Print the string so far to the console
      i++;
    }, 200);

  },[])

  const handleClick = () =>{
    navigate('/open')

    
  }

  return (
    <div className={` lockScreenNotification bg-slate-600 h-screen text-white `} onClick={handleClick}>
        <section id='header'  className='text-sm flex justify-between px-3 pt-2 pb-1 bg-black text-white sticky  '>
                <span>Airtel</span>
                <span className='text-[3mm] border px-[2mm] bg-slate-700'>100  </span>
        </section>
        <section className="flex justify-between px-3 mt-3">
          <div>
            <span className='text-5xl'>1:07</span>
            <span>Friday, 07 April</span>
          </div>
          <div>
            <IoNotificationsCircle className='text-3xl mt-2' />
          </div>
        </section>
        <div className='flex mt-24 items-center text-3xl justify-center'>
          <span>{str2}</span>

        </div>
    </div>
  )
}

export default LockScreenNotification
