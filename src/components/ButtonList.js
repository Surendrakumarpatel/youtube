import React from 'react'
import Button from './Button'


const buttonContent = ['All', 'Computer Programming', 'Kapil Sharma', 'Musics', 'Video', 'Songs', 'Cricket', 'Vlogs', 'Technology']

const ButtonList = () => {
  return (
    <div className='flex ml-5'>
      {
        buttonContent.map((value, idx) => {
          return (
            <div key={idx}>
              <Button value={value} />
            </div>

          )
        })
      }

    </div>
  )
}

export default ButtonList