import React, { useRef, useState, useEffect } from 'react'
import s1 from '../../songs/s1.mp3'
import s2 from '../../songs/s2.mp3'
import s3 from '../../songs/s3.mp3'
import s4 from '../../songs/s4.mp3'
import s5 from '../../songs/s5.mp3'
import c1 from '../../songs/so1.jpeg'
import c2 from '../../songs/so2.jpg'
import c3 from '../../songs/so3.jpeg'
import c4 from '../../songs/so4.jpg'
import c5 from '../../songs/so5.jpg'

const playlistData = [
    {
        id: 1,
        title: 'Channa Ve',
        artist: 'Ammy Virk, Tania',
        album: 'Sufna',
        duration: '4:19',
        cover: c1,
        audio: s1
    },
    {
        id: 2,
        title: 'Kahani Suno 2.0',
        artist: 'Neelesh Misra, Amrita Nayak',
        album: 'Kahani Suno 2.0',
        duration: '5:34',
        cover: c2,
        audio: s2
      },
      {
        id: 3,
        title: 'Chaand Baaliyan',
        artist: 'Asees Kaur, Jubin Nautiyal',
        album: 'Ludo',
        duration: '3:11',
        cover: c3,
        audio: s3
      },
      {
        id: 4,
        title: 'Kahaani',
        artist: 'Arijit Singh, Shreya Ghoshal',
        album: 'Laal Singh Chaddha',
        duration: '5:37',
        cover: c4,
        audio: s4
      },
      {
        id: 5,
        title: 'Dekha Tera Kya/Latthay Di Chaadar',
        artist: 'Farhan Saeed, Quratulain Balouch',
        album: 'Coke Studio Season 10',
        duration: '7:55',
        cover: c5,
        audio: s5
      }
      
];


const Music = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // useEffect(() => {
    //     if (isPlaying) {
    //         audioRef.current.play();
    //     } else {
    //         audioRef.current.pause();
    //     }
    // }, [isPlaying]);
    return (
        <div>

            <div className='overflow-auto h-screen bg-slate-700 text-white'>
                <div className='text-white text-2xl flex flex-col items-center justify-center bg-slate-950 py-2'>
                    <span>
                        Play Songs
                    </span>
                    <span className='text-s'>
                        Akm PlayList
                    </span>
                    <span className='text-xs'>
                        Click To Play The Song
                    </span>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
                    {playlistData.map(song => (
                        <div key={song.id} className="p-4 bg-slate-600 rounded-lg shadow-md">
                            <img src={song.cover} alt={`${song.album} cover`} className="mb-2 rounded-lg w-full" />
                            <h2 className="text-lg font-semibold mb-1 text-center">{song.title}</h2>
                            <p className="text-gray-300 text-sm mb-1 text-center">{song.artist}</p>
                            <p className="text-gray-300 text-sm mb-2 text-center">{song.album}</p>
                            <audio src={song.audio} controls className="w-full"></audio>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Music
