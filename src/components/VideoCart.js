import React from 'react'

const VideoCart = ({item}) => {
    const {snippet, statistics} = item;
    const {channelTitle, thumbnails, title} = snippet;
    const {commentCount,favoriteCount,likeCount,viewCount} = statistics;
    
  return (
    <div className='m-1 w-94 p-1 cursor-pointer'> 
        <img className='rounded-xl w-full' src={thumbnails.medium.url} alt="thumbnails" />
        <ul>
            <li className='font-bold text-md'>{title}</li>
            <li className='text-gray-500'>{channelTitle}</li>
            <li className='text-gray-500'>{viewCount} views</li>
        </ul>
    </div>
  )
}

export const AddVideoCart = ({item}) => {
   return (
    <div>
      <button className=' px-4 rounded-md absolute ml-2 mt-2 bg-gray-900 text-white'>Ad</button>
      <VideoCart item={item}/>
      <h1 className='font-bold px-3'>AD T-Series</h1>

    </div>
   )
  
}

export default VideoCart