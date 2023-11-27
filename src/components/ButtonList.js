import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeCategory } from '../utils/appSlice';


const buttonContent = ['All',
  'Computer Programming',
  'Kapil Sharma',
  'Musics',
  'Video',
  'Songs',
  'Cricket',
  'Vlogs',
  'Technology',
  'Recent uploaded',
  'New to you',
  'Watched',
  'Comedy',
  'Thriller',
  'News',
  'Recent uploaded',
  'New to you',
  'Watched',
  'Comedy',
  'Thriller',
  'News'
]

const ButtonList = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("All");


  const videoByTagHandler = async (searchTag) => {
    if (active !== searchTag) {
      dispatch(changeCategory(searchTag));
      setActive(searchTag);
    }
  }
  return (
    <div className='flex w-full overflow-x-scroll no-scrollbar'>
      {
        buttonContent.map((searchTag, idx) => {
          return (
            <div key={idx}>
              <button onClick={() => videoByTagHandler(searchTag)} className={`${active === searchTag
                ? "bg-slate-900 dark:bg-white dark:text-black text-white "
                : " bg-gray-100 dark:text-white dark:bg-[#2d2d2d]"
                }  px-3 w-fit py-2 mx-1 text-sm font-medium cursor-pointer rounded-lg`}><span className="whitespace-nowrap">{searchTag}</span></button>
{/* dark:text-zinc-900 */}
            </div>
          )
        })
      }
    </div>
  )
}

export default ButtonList