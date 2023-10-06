import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import VideoCart, { AddVideoCart } from './VideoCart';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await fetch(YOUTUBE_VIDEO_API);
      const jsonData = await res.json();
      setVideo(jsonData?.items);
    }
    fetchVideo();
  }, []);

  return (
    <div className='ml-5 mr-5 mt-2 grid grid-cols-3 gap-0'>
       {video[0] && <AddVideoCart item = {video[0]}/> }
       {
        video.map((item) => {
          return (
            <Link key={item.id} to={`/watch?v=${item.id}`}>
              <VideoCart item = {item}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default VideoContainer