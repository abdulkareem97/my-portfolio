import React, { useState, useRef, useLayoutEffect,useEffect } from 'react';
// import './HomeScreen2.css';
import { BsFillCircleFill, BsFillCaretLeftFill, BsSquareFill, BsBrowserChrome, BsYoutube, BsArrowLeftCircleFill, BsImageFill } from "react-icons/bs";
import { IoLogoGoogleticTac,IoImages } from "react-icons/io5";
import { FaImage,FaCat,FaGithub } from 'react-icons/fa';
// import { SiYoutubesgpaCalculator } from 'react-icons/si';
import { AiFillCalculator } from 'react-icons/ai';
import { HiCurrencyDollar } from 'react-icons/hi';
import { FcTodoList } from 'react-icons/fc';
import { TbTicTac,TbCircleNumber9 } from 'react-icons/tb';

import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';
import axios from 'axios';

const API_KEY = '28b36a4e-8b7c-4e80-8da1-d36b0f0a8678';

const fetchSeriesData = async () => {
  try {
    const response = await axios.get(`https://api.cricapi.com/v1/series_info?apikey=${API_KEY}&offset=0&id=47b54677-34de-4378-9019-154e82b9cc1a`);
    return response.data.matchList;
  } catch (error) {
    console.log(error);
  }
};

const currentMatches = async () => {
    try {
      const response = await axios.get('https://api.cricapi.com/v1/currentMatches', {
        params: {
          apikey: '28b36a4e-8b7c-4e80-8da1-d36b0f0a8678',
          offset: 0
        }
      });
    //   console.log(response.data);
    return [response.data,response.series_id]
      return 
    } catch (error) {
      console.error(error);
    }
  }



const HomeScreen2 = ({changeScreen}) => {
    const [parentSize, setParentSize] = useState({ width: '100%', height: '100%' });
    const [childSize, setChildSize] = useState({ width: '5rem', height: '5rem' });
    const [temp, setTemp] = useState([])
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
        // getWeatherData('gulbarga').then((temp) => setTemp(`The temperature in Gulbarga is ${temp}°C.`))
        fetchSeriesData().then((temp)=>setTemp(temp));
    }, [parentRef]);
    const catFact = useSpring({ x: 10, y: parentSize.height - 100 });
    const ticTac = useSpring({ x: parentSize.width - 100, y: parentSize.height - 310 });
    const currency = useSpring({ x: 150, y: parentSize.height - 100 });
    const numPuz = useSpring({ x: parentSize.width - 100, y: parentSize.height - 210 });
    const todoList = useSpring({ x: 150, y: parentSize.height - 210});
    const github = useSpring({ x: 150, y: parentSize.height - 310});
    const sgpaCalculator = useSpring({ x: 10, y: parentSize.height - 210 });


    const bindLogo1 = useDrag((params) => {
        catFact.x.set(params.offset[0]);
        catFact.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 10,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });

    const bindLogo2 = useDrag((params) => {
        ticTac.x.set(params.offset[0]);
        ticTac.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 0,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });

    const bindLogo3 = useDrag((params) => {
        numPuz.x.set(params.offset[0]);
        numPuz.y.set(params.offset[1]);

    }, {
        bounds: {
            left: 0,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });

    const bindLogo4 = useDrag((params) => {
        sgpaCalculator.x.set(params.offset[0]);
        sgpaCalculator.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 0,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });
    const bindLogo5 = useDrag((params) => {
        currency.x.set(params.offset[0]);
        currency.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 0,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });
    const bindLogo6 = useDrag((params) => {
        todoList.x.set(params.offset[0]);
        todoList.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 0,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });
    const bindLogo7 = useDrag((params) => {
        github.x.set(params.offset[0]);
        github.y.set(params.offset[1]);
    }, {
        bounds: {
            left: 0,
            top: 0,
            right: parentSize.width - 100,
            bottom: parentSize.height - 100,
        },
    });

    return (
        <div className='h-full relative'>

<div className='absolute left-2 top-1/2 text-3xl text-white' onClick={
    ()=>{
        changeScreen(1)
        
    }


} >
                <BsArrowLeftCircleFill />

            </div>


            <div className='text-white absolute top-1 left-1/3 text-2xl text-center'>
                <span>My Projects</span>
            </div>

            <div style={{ ...parentSize }} ref={parentRef}>


                <animated.div {...bindLogo1()} style={{

                    x: catFact.x,
                    y: catFact.y,
                    touchAction: 'none',
                }} >
                    <a className="absolute" href={'https://cat-fact-r1pp-76c0givcr-abdulkareem97.vercel.app/'}>
                        <FaCat className="text-purple-900" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-3 right-0 px-2 py-1 b text-white text-xs w-fit">
                            Cat Fact
                        </div>
                    </a>
                </animated.div>
                <animated.div {...bindLogo2()} style={{

                    x: ticTac.x,
                    y: ticTac.y,
                    touchAction: 'none',
                }} >
                    <a className="absolute" href={'https://abdulkareem97.github.io/tic-tac/'}>
                        <TbTicTac className="text-red-700" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-3 right-0 px-2 py-1  text-white text-xs w-fit">
                            Tic Tac
                        </div>
                    </a>
                </animated.div>
                <animated.div {...bindLogo3()} style={{

                    x: numPuz.x,
                    y: numPuz.y,
                    touchAction: 'none',
                }} >
                    <a className="absolute" href={'https://abdulkareem97.github.io/numPuzz/'}>
                        <TbCircleNumber9 className="text-pink-600" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-2 right-0 px-2 py-1  text-white text-xs w-fit">
                            NumPuz
                        </div>
                    </a>
                </animated.div>
                <animated.div {...bindLogo4()} style={{

                    x: sgpaCalculator.x,
                    y: sgpaCalculator.y,
                    touchAction: 'none',
                }} >
                    <a className="absolute" href={'https://abdulkareem97.github.io/sgpa_calculator/'}>
                        <AiFillCalculator className="text-green-500" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-0.5  right-0 px-2 py-1  text-white text-xs w-fit">
                            SgpaCalculator
                        </div>
                    </a>
                </animated.div>
                <animated.div {...bindLogo5()} style={{

                    x: currency.x,
                    y: currency.y,
                    touchAction: 'none',
                }} >
                    <a className="absolute" href={'https://abdulkareem97.github.io/Currency/'}>
                        <HiCurrencyDollar className="text-green-500" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-0.5  right-0 px-2 py-1  text-white text-xs w-fit">
                            Currency
                        </div>
                    </a>
                </animated.div>
                <animated.div {...bindLogo6()} style={{

                    x: todoList.x,
                    y: todoList.y,
                    touchAction: 'none',
                }} >
                    <a className="absolute" href={'https://abdulkareem97.github.io/todo-list/'}>
                        <FcTodoList className="text-green-500" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-2  right-0 px-2 py-1  text-white text-xs w-fit">
                            TodoList
                        </div>
                    </a>
                </animated.div>
                <animated.div {...bindLogo7()} style={{

                    x: github.x,
                    y: github.y,
                    touchAction: 'none',
                }} >
                    <a className="absolute" href={'https://github.com/abdulkareem97'}>
                        <FaGithub className="text-black bg-white rounded-full" style={{ ...childSize }} />
                        <div className="absolute -bottom-5 left-2  right-0 px-2 py-1  text-white text-xs w-fit">
                            Githyb
                        </div>
                    </a>
                </animated.div>

                {/* <WidgetComponent /> */}
                
            </div>

        </div>
    )
}





export default HomeScreen2


