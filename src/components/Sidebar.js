import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
 
const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className='p-5 shadow-md w-[20%] h-fit'>
      <ul className='border-b-2 pb-4'>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold'>Subscription</h1>
      <ul className='border-b-2 pb-4'>
        <li>Musics</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <ul className='border-b-2 pt-4'>
        <li>Library</li>
        <li>Hostory</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  )
}

export default Sidebar