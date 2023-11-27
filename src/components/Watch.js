import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
// import { YOUR_API_KEY } from '../utils/constant';
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
import { YOUR_API_KEY } from '../config/env';

const Watch = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const id = searchParams.get("v");

    const [singleVideo, setSingleVideo] = useState(null);
    const [input, setInput] = useState("");

    const getMessage = () =>{
        dispatch(addMessage({
            name:"Patel Stuffs",
            message:input,
        }))
        setInput("");
    }

    const getSingleVideo = async () => {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${YOUR_API_KEY}`);
        const jsonData = await res.json();
        setSingleVideo(jsonData?.items[0]);
    }

    useEffect(() => {
        getSingleVideo();
        dispatch(closeMenu());
    }, []);

    return (

        <div className='flex items-center justify-center w-[100%]' >
            <div className='flex w-[88%]'>
                <div>
                    <iframe
                        width="900"
                        height="500"
                        src={`https://www.youtube.com/embed/${id}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                    <h1 className='font-bold mt-2 text-lg'>{singleVideo?.snippet?.title}</h1>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center justify-between w-[30%]'>
                            <h1 className='font-bold '>{singleVideo?.snippet?.channelTitle}</h1>
                            <button className='px-3 py-1 font-bold bg-black text-white rounded-full'>Subscribe</button>
                        </div>
                        <div className='flex items-center justify-between w-[45%]'>
                            <div className='flex justify-between items-center w-32 px-4 py-1 rounded-full bg-gray-200 cursor-pointer'>
                                <span className='flex items-center border-r-2 border-gray-400 pr-2 font-bold'><AiOutlineLike size={"23px"} />{singleVideo?.statistics?.likeCount >= 1000 ?
                                    singleVideo?.statistics?.likeCount.toString().substring(0, 3) + "k" :
                                    singleVideo?.statistics?.likeCount}
                                </span>
                                <AiOutlineDislike size={"23px"} />
                            </div>
                            <div className='flex justify-between items-center px-4 py-1 rounded-full bg-gray-200 cursor-pointer'>
                                <span className='flex items-center font-bold'>
                                    <PiShareFatLight size={"23px"} className='mr-2' />
                                    Share
                                </span>
                            </div>
                            <div className='flex justify-between items-center px-4 py-1 rounded-full bg-gray-200 cursor-pointer'>
                                <span className='flex items-center font-bold'>
                                    <LiaDownloadSolid size={"23px"} className='mr-2' />
                                    Download
                                </span>
                            </div>
                        </div>

                    </div>
                    <div>
                        <CommentsContainer />
                    </div>
                </div>
                <div className='border border-gray-300 w-[100%] ml-8 rounded-lg h-fit'>
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
                            <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Send message...' className='w-[100%] ml-4 outline-none border-b-2 border-gray-400' />
                            <div onClick={getMessage} className='p-2 rounded-full bg-gray-200 cursor-pointer'>

                                <BsSend />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Watch