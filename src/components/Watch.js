import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai"
import { AiOutlineDislike } from "react-icons/ai"
import { PiShareFatLight } from "react-icons/pi"
import { LiaDownloadSolid } from "react-icons/lia"
import CommentsContainer from './CommentsContainer';
import { PiDotsThreeVerticalBold } from "react-icons/pi"
import { BsSend } from "react-icons/bs";
import Avatar from 'react-avatar';
import LiveChat from './LiveChat';
import { addMessage } from '../utils/chatSlice';
import { YOUR_API_KEY } from '../utils/constant';
 
const Watch = () => {
    console.log("watchpage render");
    const [input, setInput] = useState("");
    const [singleVideo, setSingleVideo] = useState(null);
    const [ytIcon, setYtIcon] = useState(null);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v");
    const { isMenuOpen } = useSelector(store => store.app);

    const getMessage = () => {
        dispatch(addMessage({
            name: "Patel Stuffs",
            message: input,
        }))
        setInput("");
    }

    const getSingleVideo = async () => {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${YOUR_API_KEY}`);
        const jsonData = await res.json();
        setSingleVideo(jsonData?.items[0]);
        getYtIcon(jsonData?.items[0]?.snippet?.channelId);
    }
    console.log(singleVideo);

    const getYtIcon = async (channelId) => {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUR_API_KEY}`);
        const jsonData = await res.json();
        const ytIcon = jsonData?.items[0]?.snippet?.thumbnails?.default?.url;
        setYtIcon(ytIcon);
    }

    useEffect(() => {
        getSingleVideo();
        dispatch(closeMenu());
    }, []);

    if (!singleVideo)
        return <h1>loading...</h1>

    return (
        <div className='flex md:items-center md:justify-center w-[100%]' >
            <div className='flex w-[88%]'>
                <div>
                    <iframe
                        width={"900"}
                        height={"500"}
                        src={`https://www.youtube.com/embed/${id}?&autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>

                    <h1 className='font-bold mt-2 text-lg'>{singleVideo?.snippet?.title}</h1>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center mt-4'>
                        <div className='flex items-center justify-between w-[30%]'>
                            <div className='flex'>
                                <Avatar src={ytIcon} size="30" round={true} className='cursor-pointer' />
                                <h1 className='font-bold ml-3'>{singleVideo?.snippet?.channelTitle}</h1>
                            </div>
                            <button className='px-3 py-1 font-bold bg-black text-white dark:bg-[#2d2d2d] rounded-full'>Subscribe</button>
                        </div>
                        <div className='flex items-center justify-between w-[45%]'>
                            <div className='flex justify-between items-center w-32 px-4 py-1 rounded-full bg-gray-200 dark:bg-[#2d2d2d] cursor-pointer'>
                                <span className='flex items-center border-r-2 border-gray-400 pr-2 font-bold'><AiOutlineLike size={"23px"} />{singleVideo?.statistics?.likeCount >= 1000 ?
                                    singleVideo?.statistics?.likeCount.toString().substring(0, 3) + "k" :
                                    singleVideo?.statistics?.likeCount}
                                </span>
                                <AiOutlineDislike size={"23px"} />
                            </div>
                            <div className='flex justify-between items-center px-4 py-1 rounded-full bg-gray-200 dark:bg-[#2d2d2d] cursor-pointer'>
                                <span className='flex items-center font-bold'>
                                    <PiShareFatLight size={"23px"} className='mr-2' />
                                    Share
                                </span>
                            </div>
                            <div className='flex justify-between items-center px-4 py-1 rounded-full bg-gray-200 dark:bg-[#2d2d2d] cursor-pointer'>
                                <span className='flex items-center font-bold'>
                                    <LiaDownloadSolid size={"23px"} className='mr-2' />
                                    Download
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className='mb-5'>
                        <CommentsContainer commentCount={singleVideo?.statistics?.commentCount} />
                    </div>
                </div>
                {
                    !isMenuOpen && (

                        <div className='md:block hidden border border-gray-300 dark:border-gray-500 w-[100%] ml-8 rounded-lg h-fit'>
                            <div className='flex items-center justify-between border-b p-2'>
                                <h1>Top chat</h1>
                                <PiDotsThreeVerticalBold className='cursor-pointer' />
                            </div>
                            <div className='overflow-y-auto h-[28rem] flex flex-col-reverse'>
                                <LiveChat />
                            </div>


                            <div className='flex items-center justify-between border-t p-2'>
                                <div className='flex items-center w-[90%]'>
                                    <div>
                                        <Avatar src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" size='25' round={true} className='cursor-pointer' />

                                    </div>
                                    <input value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Send message...' className='w-[100%] ml-4 outline-none border-b-2 dark:rounded-lg dark:px-3 dark:py-1 border-gray-400 dark:bg-[#2d2d2d]' />
                                    <div onClick={getMessage} className='p-2 rounded-full bg-gray-200 dark:bg-[#2d2d2d] cursor-pointer'>
                                        <BsSend />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Watch