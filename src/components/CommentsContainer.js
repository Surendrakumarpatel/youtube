import React, { useState } from 'react'
import { MdOutlineSort } from "react-icons/md";
import Comment from './Comment';

const commentsData = [
    {
        name: "Patel Stuffs",
        comment: "try to learn all this eventually not in one day",
        replies: [
            {
                name: "Pro khiladi",
                comment: "Agree",
                replies: [

                ],
            },
            {
                name: "Saini",
                comment: "yes correct",
                replies: [

                ],
            },
        ],
    },
    {
        name: "Keshav Kumar",
        comment: "Wow!! sir amazing tricks.",
        replies: [
            {
                name: "Saini",
                comment: "yes correct",
                replies: [
                    {
                        name: "Yepp",
                        comment: "Not absolutily correct",
                        replies: [
        
                        ],
                    },
                ],
            },
        ],
    },

]



const CommentsContainer = () => {
    const [showSort, setShowSort] = useState(false);

    const display = () => {
        setShowSort(!showSort);
    }

    return (
        <div>
            <div className='flex w-[24%] items-center justify-between mt-5 mb-5'>
                <h1 className='text-2xl font-bold'>5 Comments</h1>
                <div className='flex items-center cursor-pointer'>
                    <MdOutlineSort />
                    <h1 onClick={display} className='font-bold'>Sorts</h1>
                    {
                        showSort && (
                            <div className='absolute bg-white border border-gray-300 rounded-lg mt-24'>
                                <ul>
                                    <li className='py-1 px-2 hover:bg-gray-200'>Top comments</li>
                                    <li className='py-1 px-2 hover:bg-gray-200'>Newest first</li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <CommentList comments = {commentsData} />
            </div>
        </div>

    )
}

const CommentList = ({ comments }) => {
     
    return (
        comments.map((comment, idx) => (
            <div key={idx}>
                <Comment data={comment} />
                <div className='border-l-2 border-slate-300 ml-7 pl-5'>
                    <CommentList comments={comment.replies}/>
                </div>
            </div>
        ))
    )
}

export default CommentsContainer