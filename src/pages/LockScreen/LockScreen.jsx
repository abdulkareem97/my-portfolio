import React from 'react'
import { useNavigate } from "react-router-dom";
const LockScreen = () => {
  const navigate = useNavigate()
    const handleScreen = ()=> {
     
        navigate('/open')
        

    }
  return (
    <div className='' onDoubleClick={handleScreen}>
      <section className='bg-black text-white h-[100vh] flex flex-col justify-center items-center text-2xl'>
        <div className='bg-photo h-32 w-32 bg-cover rounded-full bg-no-repeat'>

        </div>
        <div>
          Akm - Portfolio
        </div>
        <div>
            Double Click To Open/Close
        </div>

      </section>
    </div>
  )
}

export default LockScreen
