import React  from 'react'
import Sidebar from './Sidebar'
import { Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
 
const Body = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
 
  return (
    <div className={`flex md:justify-between justify-center dark:text-white pt-16 ${!isMenuOpen && 'md:mx-5 mx-2' }`}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body