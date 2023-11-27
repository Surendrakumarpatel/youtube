import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToggle } from '../utils/appSlice';
import SidebarItem from './SidebarItem';
import { FaFire } from "react-icons/fa6";
import { MdOutlineShoppingBag, MdScience, MdOutlineSubscriptions } from "react-icons/md";
import { IoIosMusicalNote, IoMdHome } from "react-icons/io";
import { PiFilmSlate } from "react-icons/pi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoGameControllerSharp } from "react-icons/io5";
import { IoNewspaper, IoWineOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { LuPodcast } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { LiaHistorySolid } from "react-icons/lia";
import { GoVideo } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { TbVideoMinus } from "react-icons/tb";

const home = [
  {
    name: "Home",
    icon: <IoMdHome size="24px" />
  },
  {
    name: "Short",
    icon:<TbVideoMinus size="24px"/> ,
  },
  {
    name: "Subscription",
    icon: <MdOutlineSubscriptions size="24px" />
  },
]

const you = [
  {
    name: "Your Channel",
    icon: <CiUser size={"24px"} />
  },
  {
    name: "History",
    icon: <LiaHistorySolid size={"24px"} />
  },
  {
    name: "Your Videos",
    icon: <GoVideo size={"24px"} />
  },
  {
    name: "Watch Later",
    icon: <MdAccessTime size={"24px"} />
  },
]

const explore = [
  {
    name: "Trending",
    icon: <FaFire size={"24px"} />
  },
  {
    name: "Shopping",
    icon: <MdOutlineShoppingBag size={"24px"} />
  },
  {
    name: "Music",
    icon: <IoIosMusicalNote size={"24px"} />
  },
  {
    name: "Films",
    icon: <PiFilmSlate size={"24px"} />
  },
  {
    name: "Live",
    icon: <HiOutlineStatusOnline size={"24px"} />
  },
  {
    name: "Gaming",
    icon: <IoGameControllerSharp size={"24px"} />
  },
  {
    name: "News",
    icon: <IoNewspaper size={"24px"} />
  },
  {
    name: "Sport",
    icon: <IoWineOutline size={"24px"} />
  },
  {
    name: "Learning",
    icon: <MdScience size={"24px"} />
  },
  {
    name: "Fashion & Beauty",
    icon: <GiClothes size={"24px"} />
  },
  {
    name: "Podcast",
    icon: <LuPodcast size={"24px"} />
  }
];

const Sidebar = () => {
  const { isMenuOpen, toggle } = useSelector(store => store.app);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(setToggle());
    document.documentElement.classList.toggle("dark");
  }

  return !isMenuOpen ? null : (
    <div className='p-5 w-[20%] h-[calc(100vh-4.625rem)] overflow-y-scroll bg-white dark:bg-[#121212] transition-all duration-500'>
      <div className='ml-4 mb-5'>
        {
          toggle ? <FaToggleOn onClick={toggleHandler} size={"40px"} className='cursor-pointer  dark:text-white' /> : <FaToggleOff onClick={toggleHandler} size={"40px"} className='cursor-pointer dark:bg-white' />
        }

      </div>
      <SidebarItem heading={null} items={home} />
      <SidebarItem heading={"You"} items={you} />
      <SidebarItem heading="Explore" items={explore} />
    </div>
  )
}

export default Sidebar