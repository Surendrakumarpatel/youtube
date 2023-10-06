import React from 'react'
import Avatar from 'react-avatar'

const Comment = ({data}) => {
    const {name, comment} = data;

  return (
    <div className='flex bg-gray-100 mb-1 p-4 rounded-lg'>
        <Avatar src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" size="30" round={true} className='cursor-pointer' />
        <div className='ml-4'>
            <h1 className='font-bold text-sm'>@{name}</h1>
            <p>{comment}</p>
        </div>
    </div>
  )
}

export default Comment