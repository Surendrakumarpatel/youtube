import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { searchVideo, toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { RiVideoUploadLine } from "react-icons/ri"
import { IoIosNotificationsOutline } from "react-icons/io"
import { YOUR_API_KEY, YOUTUBE_SEARCH_API } from '../utils/constant';
import { searchResults } from '../utils/cacheSlice';
import { Navigate } from 'react-router-dom';


const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [serachData, setSearchData] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector(store => store.search);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  const changeEvenetHandler = (e) => {
    setSearchQuery(e.target.value);
  }
  useEffect(() => {

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchData(searchCache[searchQuery])
      } else {
        searchApiCalls();
      }
    }, 200)
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const searchApiCalls = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await res.json();
    setSearchData(jsonData[1]);
    // update our store 
    dispatch(searchResults({ [searchQuery]: jsonData[1] }));
  }
  const getSearchedQuery = async () => {
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUR_API_KEY}`)
    const jsonData = await res.json();
    dispatch(searchVideo(jsonData));
  
  }


  return (
    <div className='flex justify-center items-center w-[100%]'>
      <div className='flex w-[96%] justify-between items-center'>
        <div className='flex items-center'>
          <GiHamburgerMenu className='cursor-pointer text-lg' onClick={toggleMenuHandler} />
          <img className='w-28 ml-5' src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" alt="youtube" />
        </div>
        <div className='flex flex-col w-[35%]'>
          <div className='flex w-[100%]'>
            <input
              value={searchQuery}
              onChange={changeEvenetHandler}
              className='w-[100%] border border-gray-500 rounded-l-full p-2 outline-none'
              placeholder='Search'
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button onClick={getSearchedQuery} className='border border-gray-500 bg-gray-100 p-2 rounded-r-full'><AiOutlineSearch className='text-2xl cursor-pointer' /></button>
          </div>
          {
            (showSuggestion && serachData.length !== 0) && (
              <div className='absolute w-[31%] py-5 bg-white rounded-md shadow-lg shadow-gray-500/40  mt-12'>
                <ul>
                  {
                    serachData.map((item, idx) => {
                      return (
                        <div key={idx} className='flex items-center px-4 hover:bg-gray-100'>
                          <AiOutlineSearch />
                          <li className='px-2 py-1 cursor-pointer text-md font-bold'>{item}</li>
                        </div>
                      )
                    })
                  }

                </ul>
              </div>
            )
          }
        </div>
        <div className='flex items-center justify-between w-[10%]'>
          <RiVideoUploadLine size={"24px"} className='cursor-pointer' />
          <IoIosNotificationsOutline size={"24px"} className='cursor-pointer' />
          <Avatar src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" size="35" round={true} className='cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Header;