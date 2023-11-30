import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from "./VideoContainer";
import Shimmer from './Shimmer';
import { useSelector } from 'react-redux';

const Feed = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  return (
    <div className={`${isMenuOpen ? 'w-[80%] md:mx-5' : 'w-[100%]'}`}> 
        <ButtonList/>
        <VideoContainer/> 
    </div>
  )
}

export default Feed