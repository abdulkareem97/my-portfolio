import React, { useState } from 'react'
import { BsFillCircleFill, BsFillCaretLeftFill, BsSquareFill, BsBrowserChrome, BsYoutube, BsFillArrowRightCircleFill, BsImageFill ,BsArrowLeftCircleFill} from "react-icons/bs";

const Gallery = () => {

    const hotel = ['bg-h1','bg-h2','bg-h3','bg-h4','bg-h5','bg-h6','bg-h7','bg-h8','bg-h9','bg-h10','bg-h11','bg-h12']
    const quiz = ['bg-q1','bg-q2','bg-q3','bg-q4','bg-q5','bg-q6']
    const smartpoll = ['bg-s1','bg-s2','bg-s3','bg-s4']
    const bill = ['bg-b1','bg-b2','bg-b3']
    const [isAlbum,setIsAlbum] = useState(true)
    const [pics,setPics] = useState([])
    const [img,setImg] = useState('')
    
    const handleClick = (value)=>{
        setIsAlbum(false)
        setPics([...value])
        setImg(value[0])


    }

    const changePhoto = (v) =>{
        const index = pics.indexOf(img)

        if(v==1)
        {
        if(pics.length === index+1)
        {
            setImg(pics[0])
        }else{
            setImg(pics[index+1])
        }
    }
    else{
        if(index === 0)
        {
            setImg(pics[pics.length-1])
        }else{
            setImg(pics[index-1])
        }

    }

    }
    const backtoAlbum = () =>{
        setIsAlbum(true)
    }







    return (

        <>

        { isAlbum && 
        <div>
            <div className='overflow-auto h-screen bg-slate-700'>
                <div className='text-white text-2xl flex flex-col items-center justify-center bg-slate-950 py-2'>
                    <span>
                        Albums
                    </span>
                    <span className='text-xs'>
                        Click The Albom To See More Photos. Projects developed by Akm
                    </span>

                </div>

                <div className='grid grid-flow-row justify-items-center p-3 text-white' onClick={()=>handleClick(hotel)}>
                    <div className=' w-full md:w-1/4 overflow-hidden '>
                        <div className='h-44  w-full  bg-h1 bg-cover bg-no-repeat'></div>

                        <div className='flex justify-center'>
                            <span>Hotel Management</span>
                        </div>
                    </div>
                </div>
                <div className='grid grid-flow-row justify-items-center	 p-3 text-white' onClick={()=>handleClick(quiz)}>
                    <div className=' w-full md:w-1/4 overflow-hidden'>
                        <div className='h-32  w-full bg-q5 bg-cover bg-no-repeat'></div>

                        <div className='flex justify-center'>
                            <span>Quiz App Using Django</span>
                        </div>
                    </div>
                </div>
                <div className='grid grid-flow-row justify-items-center	 p-3 text-white' onClick={()=>handleClick(bill)}>
                    <div className=' w-full md:w-1/4 overflow-hidden'>
                        <div className='h-40  w-full bg-b1 bg-cover bg-no-repeat'></div>

                        <div className='flex justify-center'>
                            <span>Billing System using IOT</span>
                        </div>
                    </div>
                </div>
                <div className='grid grid-flow-row justify-items-center	 p-3 text-white' onClick={()=>handleClick(smartpoll)}>
                    <div className=' w-full md:w-1/4 overflow-hidden'>
                        <div className='h-48  w-full bg-s1 bg-cover bg-no-repeat'></div>

                        <div className='flex justify-center'>
                            <span>Smart Poll using IOT</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>}

        {
            !isAlbum &&
            <div className='h-screen relative bg-slate-700'>
                      <div className='absolute right-2 top-1/2 text-3xl text-white z-20' onClick={()=>changePhoto(1)} >
                <BsFillArrowRightCircleFill />

            </div>
            <div className='absolute left-2 top-1/2 text-3xl text-white z-20' onClick={()=>changePhoto(0)} >
                <BsArrowLeftCircleFill />

            </div>
            <div className='absolute left-1/2 top-4 text-3xl text-white' onClick={()=>backtoAlbum()} >
                <span> 🔙 </span>

            </div>

            <div className={`${img} h-48 relative top-20  bg-cover bg-no-repeat z-10`}>

            </div>


            </div>
        }
        </>
    )
}

export default Gallery
