import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateNameGenerator, makeMessageGenerator } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();

    const messages = useSelector(store => store.chat.message);
 
    useEffect(() => {

        const timer = setInterval(() => {
            dispatch(addMessage({ name: generateNameGenerator(), message: makeMessageGenerator(20) }))
        }, 1000)

        return () => {
            clearInterval(timer);
        }

    }, [])

    return (
        <div className='px-4 py-1'>
            {
                messages.map((mssg, idx) => {
                    const { name, message } = mssg;
                    return (
                        <div key={idx}>
                            <ChatMessage name={name} message={message} />

                        </div>
                    )
                })
            }
        </div>
    )
}

export default LiveChat