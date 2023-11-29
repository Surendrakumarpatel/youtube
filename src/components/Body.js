import React  from 'react'
import Sidebar from './Sidebar'
import { Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
 
const Body = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
 
  return (
    <div className={`flex justify-between dark:text-white pt-16 ${!isMenuOpen && 'mx-5' }`}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body