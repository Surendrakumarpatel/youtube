import React, { useEffect } from 'react'
import { BASE_URL} from '../utils/constant'
import VideoCart, { AddVideoCart } from './VideoCart';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { useDispatch, useSelector } from 'react-redux';
import { loading, setHomeVideo } from '../utils/appSlice';
import { YOUR_API_KEY } from '../config/env';

const VideoContainer = () => {

  const dispatch = useDispatch();
  const { isMenuOpen, category, isLoading } = useSelector(store => store.app);
  const { video } = useSelector(store => store.app);

  useEffect(() => {
    dispatch(loading(true));
    if (category === "All") {
      const fetchVideo = async () => {
        try {
          const res = await fetch(`${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUR_API_KEY}`);
          const data = await res.json();
          console.log(data);
          dispatch(setHomeVideo(data?.items === undefined ? [] : data.items));
          dispatch(loading(false));
        } catch (error) {
          console.log(error);
        }
      }
      fetchVideo();
    } else {
      const fetchVideoByKeyword = async (category) => {
        try {
          const res = await fetch(`${BASE_URL}/search?part=snippet&maxResults=50&type=video&q=${category}&key=${YOUR_API_KEY}`);
          const data = await res.json();
          dispatch(setHomeVideo([]))
          dispatch(setHomeVideo(data?.items === undefined ? [] : data.items));
          dispatch(loading(false));
        } catch (error) {
          console.log(error);
        }
      }
      fetchVideoByKeyword(category);
    }


  }, [category])


  return isLoading ? (<Shimmer />) : video && video.length === 0 ? <div className='relative top-20 text-center'><p>Some internal issue visite after few minutes!</p></div> :
    (
      <div className={`grid ${isMenuOpen ? 'grid-cols-3' : 'grid-cols-4'} gap-0`}>
        {video[0] && <AddVideoCart item={video[video.length - 1]} />}
        {
          video.map((item) => {
            console.log("*******");
            console.log(item);
            console.log("*******");
            return (
              <Link key={typeof item.id === 'object' ? item.id.videoId : item.id} to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`}>
                <VideoCart item={item} />
              </Link>
            )
          })
        }
      </div>
    )
}

export default VideoContainer