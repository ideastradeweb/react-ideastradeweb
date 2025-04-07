import './HomeLayout.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaBars  } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";
// COMPONENTS
import { Sidebar } from '../../components';
import useWindowSize from '../../hooks/useWindowsSize';


export const HomeLayout = () => {

  const [isOpen, setIsOpen] = useState(true);

  const { width } = useWindowSize();

  const handleIsOpen = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen)
  }

  const handleAnyClick = () => {
    if (width <= 576) setIsOpen(true);     
  }

  useEffect(() => {
    // Close sidebar on larger screens
    if (width <= 576) setIsOpen(true);  
    else setIsOpen(false)
  }, [width]);




  return (
    <section className='homeLayout' onClick={handleAnyClick}>

      <button className='homeLayout__menu-btn' onClick={handleIsOpen}>
        {isOpen ? (
          <FaBars className='homeLayout__menu-icon' />
        ) : (
          <RiCloseLargeLine className='homeLayout__menu-icon' /> 
        )}
      </button>

      <Sidebar isOpen={isOpen} />
   
      <div className='homeLayout__main'>
        <Outlet />
      </div>

    </section>
  )
}