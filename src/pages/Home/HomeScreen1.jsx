import React, { useState, useRef, useLayoutEffect } from 'react';
// import './HomeScreen1.css';
import { BsFillCircleFill, BsFillCaretLeftFill, BsSquareFill, BsBrowserChrome, BsYoutube, BsFillArrowRightCircleFill, BsImageFill ,BsArrowLeftCircleFill} from "react-icons/bs";
import { IoLogoGooglePlaystore,IoImages } from "react-icons/io5";
import { FaImage } from 'react-icons/fa';
import { SiYoutubeprofile,SiYoutubemusic } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';

import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

async function getWeatherData(city) {
    const apiKey = '3becb1759da057bd3b63a18a7d85d605';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        const tempInCelsius = data.main.temp - 273.15;

        return tempInCelsius.toFixed(2);
    } catch (error) {
        console.error(error);
    }
}

const HomeScreen1 = ({changeScreen}) => {
  const navigate = useNavigate()

    const [parentSize, setParentSize] = useState({ width: '100%', height: '100%' });
    const [childSize, setChildSize] = useState({ width: '5rem', height: '5rem' });
    const [temp, setTemp] = useState("")
    const posA = useSpring({ x: 0, y: 0 });
    const posHandle = useSpring({ y: 0 });
    const parentRef = useRef(null);
    // const [parentWidth, setParentWidth] = useState(null);

    useLayoutEffect(() => {
        if (parentRef.current) {
            setParentSize({
                width: parentRef.current.offsetWidth,
                height: parentRef.current.offsetHeight,
            });
        }
        getWeatherData('gulbarga').then((temp) => setTemp(`The temperature in Gulbarga is ${temp}°C.`))
    }, [parentRef]);
    const gallerLogo = useSpring({ x: 10, y: parentSize.height - 100 });
    const playstore = useSpring({ x: parentSize.width - 100, y: parentSize.height - 100 });
    const wallpaper = useSpring({ x: 150, y: parentSize.height - 210 });
    const profile = useSpring({ x: 150, y: parentSize.height - 100 });
    const music = useSpring({ x: 10, y: parentSize.height - 210 });


    const bindLogo1 = useDrag((params) => {
        gallerLogo.x.set(params.offset[0]);
        gallerLogo.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 10,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });

    const bindLogo2 = useDrag((params) => {
        playstore.x.set(params.offset[0]);
        playstore.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 0,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });

    const bindLogo3 = useDrag((params) => {
        wallpaper.x.set(params.offset[0]);
        wallpaper.y.set(params.offset[1]);
        // gallerLogo.x.set(params.offset[0]);
        // gallerLogo.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 0,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });

    const bindLogo4 = useDrag((params) => {
        profile.x.set(params.offset[0]);
        profile.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 0,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });
    const bindLogo5 = useDrag((params) => {
        music.x.set(params.offset[0]);
        music.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 0,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });

    const handleNavigation = (str)=>{
        // console.log('here')
        navigate('/'+str)
    }

    return (
        <div className='h-full relative'>

            <div className='absolute right-2 top-1/2 text-3xl text-white' onClick={()=>changeScreen(2)} >
                <BsFillArrowRightCircleFill />

            </div>
            <div className='absolute left-2 top-1/2 text-3xl text-white' onClick={()=>changeScreen(0)} >
                <BsArrowLeftCircleFill />

            </div>

            <div className='text-white absolute top-1/4 text-2xl text-center md:left-1/3'>
                <span>{temp}</span>
            </div>

            <div style={{ ...parentSize }} ref={parentRef}>


                <animated.div {...bindLogo1()} style={{

                    x: gallerLogo.x,
                    y: gallerLogo.y,
                    touchAction: 'none',
                }} 
                onClick={()=>{handleNavigation('gallery')}}
                
                >
                    <div className="absolute">
                        <BsImageFill className="text-purple-900" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-3 right-0 px-2 py-1 b text-white text-xs w-fit">
                            Gallery
                        </div>
                    </div>
                </animated.div>
                <animated.div {...bindLogo2()} style={{

                    x: playstore.x,
                    y: playstore.y,
                    touchAction: 'none',
                }} 
                onClick={()=>{handleNavigation('PlayStore')}}
                
                >
                    <div className="absolute">
                        <IoLogoGooglePlaystore className="text-red-700" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-1 right-0 px-2 py-1  text-white text-xs w-fit">
                            Play Store
                        </div>
                    </div>
                </animated.div>
                <animated.div {...bindLogo3()} style={{

                    x: wallpaper.x,
                    y: wallpaper.y,
                    touchAction: 'none',
                }} 
                onClick={()=>{handleNavigation('theme')}}
                >
                    <div className="absolute">
                        <IoImages className="text-pink-600" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-3 right-0 px-2 py-1  text-white text-xs w-fit">
                            Theme
                        </div>
                    </div>
                </animated.div>
                <animated.div {...bindLogo4()} style={{

                    x: profile.x,
                    y: profile.y,
                    touchAction: 'none',
                }}
                onClick={()=>{handleNavigation('profile')}}
                >
                    <div className="absolute">
                        <CgProfile className="text-green-500" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-3 right-0 px-2 py-1  text-white text-xs w-fit">
                            Profile
                        </div>
                    </div>
                </animated.div>
                <animated.div {...bindLogo5()} style={{

                    x: music.x,
                    y: music.y,
                    touchAction: 'none',
                }}
                onClick={()=>{handleNavigation('music')}}
                >
                    <div className="absolute">
                        <SiYoutubemusic className="text-blue-500" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-3 right-0 px-2 py-1  text-white text-xs w-fit">
                            Music
                        </div>
                    </div>
                </animated.div>
            </div>

        </div>
    )
}

export default HomeScreen1


