import React from 'react'
import {SiPostman} from "react-icons/si"
import {TbNumbers} from "react-icons/tb"
import {FaCalculator} from "react-icons/fa"

const PlayStore = () => {


    const handleDownload = (apk)=>{
        let fileUrl = `/apps/${apk}.apk`
        window.location.href = fileUrl;

    }
    return (
        <div>
            <div className='overflow-auto h-screen bg-slate-700 text-white'>
                <div className='text-white text-2xl flex flex-col items-center justify-center bg-slate-950 py-2'>
                    <span>
                        PlayStore
                    </span>
                    <span className='text-s'>
                         Projects developed by Akm
                    </span>
                    <span className='text-xs'>
                        Click To Download The app
                    </span>

                </div>

                <div className='grid grid-cols-5 p-2 bg-slate-800 ' onClick={()=>handleDownload("age")}>
                    <div className='col-span-2'>
                        {/* <div className='bg-b1 bg-cover bg-no-repeat h-32 w-32 rounded-full'>

                        </div> */}
                        <SiPostman  className='h-32 w-32'/>
                    </div>
                    <div className='col-span-3 flex flex-col justify-center items-start '>
                        <span>Age In Minute Calculator</span>
                        <span className='text-sm opacity-70'>It Calculate the number of minutes you lived</span>
                        <span>6 Mb</span>
                    </div>
                </div>
                <div className='grid grid-cols-5 p-2 bg-slate-800 ' onClick={()=>handleDownload("counter")}>
                    <div className='col-span-2'>
                        {/* <div className='bg-b1 bg-cover bg-no-repeat h-32 w-32 rounded-full'>

                        </div> */}
                        <TbNumbers className='h-32 w-32 rounded-full bg-blue-700 text-yellow-400'/>
                    </div>
                    <div className='col-span-3 flex flex-col justify-center items-start '>
                        <span>People Counter App</span>
                        <span className='text-sm opacity-70'>It counts the number of people visited a area</span>
                        <span>6 Mb</span>
                    </div>
                </div>
                <div className='grid grid-cols-5 p-2 bg-slate-800 ' onClick={()=>handleDownload("calc")}>
                    <div className='col-span-2'>
                        {/* <div className='bg-b1 bg-cover bg-no-repeat h-32 w-32 rounded-full'>

                        </div> */}
                        <FaCalculator className='h-32 w-32 text-green-500 ' />
                    </div>
                    <div className='col-span-3 flex flex-col justify-center items-start '>
                        <span>Simple Calculator</span>
                        <span className='text-sm opacity-70'>Basic Calculator to perform your daily task</span>
                        <span>6.2 Mb</span>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default PlayStore
