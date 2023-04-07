import React from 'react'
import v1 from '../../videos/v1.mp4'
import v2 from '../../videos/v2.mp4'
import v3 from '../../videos/v31.mp4'
import v4 from '../../videos/v41.mp4'
import v5 from '../../videos/v51.mp4'
import v6 from '../../videos/v61.mp4'
import v7 from '../../videos/v71.mp4'
import v8 from '../../videos/v81.mp4'
import v9 from '../../videos/v91.mp4'
import v10 from '../../videos/v101.mp4'
// import v5 from '../../videos/v5.mp4'
import vo1 from '../../videos/vo1.png'
import vo2 from '../../videos/vo2.png'
import vo3 from '../../videos/vo3.png'
import vo4 from '../../videos/vo4.png'
import vo5 from '../../videos/vo5.png'
import vo6 from '../../videos/vo6.png'
import vo7 from '../../videos/vo7.png'
import vo8 from '../../videos/vo8.png'
import vo9 from '../../videos/vo9.png'
import vo10 from '../../videos/v10.png'

const videoPlaylist = [
    {
        id: 1,
        title: 'Jardians Game',
        url: v1,
        thumbnail: vo1,
        duration: '0:42'
    },
    {
        id: 2,
        title: 'Rocket Game',
        url: v2,
        thumbnail: vo2,
        duration: '0:40'
    },
    {
        id: 3,
        title: 'Ping pong Game',
        url: v3,
        thumbnail: vo3,
        duration: '0:11'
    },
    {
        id: 4,
        title: 'Markcard Generator',
        url: v4,
        thumbnail: vo4,
        duration: '0:21'
    },
    {
        id: 5,
        title: 'Quiz App',
        url: v5,
        thumbnail: vo5,
        duration: '0:48'
    },
    {
        id: 6,
        title: 'Todo List',
        url: v6,
        thumbnail: vo6,
        duration: '0:48'
    },
    {
        id: 7,
        title: 'Sgpa Calculator',
        url: v7,
        thumbnail: vo7,
        duration: '0:36'
    },
    {
        id: 8,
        title: 'Number Puzzle Game',
        url: v8,
        thumbnail: vo8,
        duration: '0:45'
    },
    {
        id: 9,
        title: 'currency Bank',
        url: v9,
        thumbnail: vo9,
        duration: '0:50'
    },{
        id: 10,
        title: 'Cups and ball Game',
        url: v10,
        thumbnail: vo10,
        duration: '0:57'
    }
];


const Video = () => {
    return (
        <div className='overflow-auto h-screen bg-slate-700 text-white'>
            <div className='text-white text-2xl flex flex-col items-center justify-center bg-slate-950 py-2'>
                <span>
                    Videos
                </span>
                <span className='text-s'>
                    Project Developed By Akm
                </span>
                <span className='text-xs'>
                    Click To Play The video
                </span>

            </div>
            <div className="flex flex-wrap justify-center">
                {videoPlaylist.map((video) => (
                    <div key={video.id} className="mx-2 my-4 w-full">
                        <video
                            src={video.url}
                            poster={video.thumbnail}
                            className="rounded-lg w-full  object-cover"
                            controls
                        />
                        <div className="bg-gray-800 p-4 rounded-b-lg">
                            <p className="text-white font-semibold text-lg">{video.title}</p>
                            <p className="text-gray-400 text-sm">{video.duration}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Video
