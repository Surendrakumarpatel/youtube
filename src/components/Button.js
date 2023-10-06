import React from 'react'
const Button = ({value}) => {
  return (
    <div>
        <button className='py-1 m-1 px-6 rounded-lg bg-gray-100 hover:bg-gray-200'>{value}</button>
    </div>
  )
}

export default Button