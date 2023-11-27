import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { YOUR_API_KEY } from '../utils/constant';

const SidebarItem = ({ heading, items }) => {
 
    return (
        <div>
            {heading && <h1 className='font-medium text-lg my-4 dark:text-white'>{heading}</h1>}
            <ul className='border-b-2 pb-4 dark:text-white'>
                {
                    items.map((item, idx) => {
                        return (
                            <div key={idx} className='flex items-center cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-[#434343] rounded-md w-full'>
                                {item.icon}
                                <li className='ml-4'><Link to="/">{item.name}</Link></li>
                            </div>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default SidebarItem