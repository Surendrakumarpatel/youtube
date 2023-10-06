import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({name, message}) => {
    return (
        <div className='flex'>
            <div>
                <Avatar src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" size='25' round={true} className='cursor-pointer' />
            </div>
            <div className='flex items-center'>

            <h1 className='ml-2 font-bold text-sm'>{name}</h1>
            <p className='ml-2 py-2 text-sm'>{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage