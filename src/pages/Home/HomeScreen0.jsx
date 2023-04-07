import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
// import './HomeScreen2.css';
import { BsFillCircleFill, BsFillCaretLeftFill, BsSquareFill, BsBrowserChrome, BsYoutube, BsFillArrowRightCircleFill, BsImageFill } from "react-icons/bs";
import { IoLogoGooglePlaystore,IoImages } from "react-icons/io5";
import { FaImage } from 'react-icons/fa';
import { SiYoutubeprofile } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';

import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';
import axios from 'axios';

// const API_KEY = '28b36a4e-8b7c-4e80-8da1-d36b0f0a8678';
function getDates() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formatDate = (date) =>
      date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(date.getDate()).padStart(2, "0");
  
    return [
      formatDate(today),
      formatDate(yesterday),
      formatDate(tomorrow),
    ];
  }

const fetchSeriesData = async () => {
  try {
    const response = await axios.get(`https://api.cricapi.com/v1/series_info?apikey=28b36a4e-8b7c-4e80-8da1-d36b0f0a8678&id=c75f8952-74d4-416f-b7b4-7da4b4e3ae6e`);
    return response.data.data.matchList;
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
   
    const [temp, setTemp] = useState([])
    const [todayMatches,setTodayMatches] = useState([])
    const [yesterday,setYesterday] = useState([])
    const [tommorrowMatches,setTommorrowMatches] = useState([])
    const [error,setError] = useState(false)

    // const [parentWidth, setParentWidth] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            let data = await fetchSeriesData();
            console.log(data);
            const dates = await getDates()
            let yesterday = data.filter((match)=>{
                return(
                     match.date.includes(dates[1]) 
                )

            })
            let today = data.filter((match)=>{
                return(
                     match.date.includes(dates[0]) 
                )

            })
            let tom = data.filter((match)=>{
                return(
                     match.date.includes(dates[2]) 
                )

            })
            console.log(data)
            // setTemp([...data])
            setYesterday([...yesterday])
            setTodayMatches([...today])
            setTommorrowMatches([...tom])
            setError(false)
          } catch (error) {
            console.error(error);
            setError(true)
          }
        };
        
        fetchData();
      }, []);
   

    return(
        <>
        <div className='h-full relative text-white'>
        <div className='absolute right-2 top-1/2 text-3xl text-white' onClick={()=>changeScreen(1)} >
                <BsFillArrowRightCircleFill />
            </div>

        <div>
            <span>Indian Premier League 2023</span>
        </div>
        <div>
            {!error && <MatchInfo data={yesterday} str={'Yesterday Matches'}/>}
            {error && 
            
            <>'Api Key Reach Limit Try Again Tommorrow'

            
            
            
            
            </>

            
            
            
            }
        </div>

        
</div>

        </>
    )
}

const MatchInfo = ({data,str})=>{
    return(
        <>
            <h1>{str}</h1>
            <div>
                {
                    data.map((d)=>{
                        return(
                            <div key={d.id}>
                                <h3>{d.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}

export default HomeScreen2


