import React from 'react'
import { useNavigate } from 'react-router-dom'

const Theme = ({changeBg}) => {
  const navigate = useNavigate()

    const changeBackground = (value)=>{
        changeBg(value)
        navigate('/dashboard')
    }
  return (
    <div className='overflow-auto h-screen bg-slate-700'>
        <div className='text-white text-2xl flex justify-center bg-slate-950 py-2'>
          <span>
          Themes
            </span> 

        </div>

        <div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 justify-items-center	 p-3 text-white'>
            <div className=' w-44 overflow-hidden'>
                <label htmlFor="bg1" className=''>
                    <div className='h-64 w-44 bg-bg1 bg-cover bg-no-repeat'></div>
                </label>
                <div className='flex justify-center'>
                    <input type="radio" name="theme" id="bg1" value={'bg-bg1'} onChange={(e)=>changeBackground(e.target.value)} />
                    <span>Bg1</span>
                </div>
            </div>
            <div className=' w-44 overflow-hidden'>
                <label htmlFor="bg2" className=''>
                    <div className='h-64 w-44 bg-bg2 bg-cover bg-no-repeat'></div>
                </label>
                <div className='flex justify-center'>
                    <input type="radio" name="theme" id="bg2" value={'bg-bg2'} onChange={(e)=>changeBackground(e.target.value)} />
                    <span>Bg2</span>
                </div>
            </div>
            <div className=' w-44 overflow-hidden'>
                <label htmlFor="bg3" className=''>
                    <div className='h-64 w-44 bg-bg3 bg-cover bg-no-repeat'></div>
                </label>
                <div className='flex justify-center'>
                    <input type="radio" name="theme" id="bg3" value={'bg-bg3'} onChange={(e)=>changeBackground(e.target.value)} />
                    <span>Bg3</span>
                </div>
            </div>
            <div className=' w-44 overflow-hidden'>
                <label htmlFor="bg4" className=''>
                    <div className='h-64 w-44 bg-bg4 bg-cover bg-no-repeat'></div>
                </label>
                <div className='flex justify-center'>
                    <input type="radio" name="theme" id="bg4" value={'bg-bg4'} onChange={(e)=>changeBackground(e.target.value)} />
                    <span>Bg4</span>
                </div>
            </div>
            <div className=' w-44 overflow-hidden'>
                <label htmlFor="bg5" className=''>
                    <div className='h-64 w-44 bg-bg5 bg-cover bg-no-repeat'></div>
                </label>
                <div className='flex justify-center'>
                    <input type="radio" name="theme" id="bg5" value={'bg-bg5'} onChange={(e)=>changeBackground(e.target.value)} />
                    <span>bg5</span>
                </div>
            </div>
            <div className=' w-44 overflow-hidden'>
                <label htmlFor="bg6" className=''>
                    <div className='h-64 w-44 bg-bg6 bg-cover bg-no-repeat'></div>
                </label>
                <div className='flex justify-center'>
                    <input type="radio" name="theme" id="bg6" value={'bg-bg6'} onChange={(e)=>changeBackground(e.target.value)} />
                    <span>bg6</span>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Theme
