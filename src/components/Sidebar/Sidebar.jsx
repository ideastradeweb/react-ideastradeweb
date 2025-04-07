import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaFolder, FaUserGroup, FaHouse } from "react-icons/fa6";


export const Sidebar = ({ isOpen }) => {

  
  return (
    <div className={isOpen ? 'sidebar sidebar--open' : 'sidebar'} >
      <nav className='sidebar__nav'>
        <ul className='sidebar__ul'>

          <li className='sidebar__li'>
            <NavLink className='sidebar__link' to={'/'}>Welcome</NavLink>
          </li>
          <li className='sidebar__li'>
            <NavLink className='sidebar__link' to={'about'}>Who we are</NavLink>
          </li>
          <li className='sidebar__li'>
            <NavLink className='sidebar__link' to={'work'}>What we do</NavLink>
          </li>
          <li className='sidebar__li'>
            <NavLink className='sidebar__link' to={'contact'}>Get in Touch</NavLink>
          </li>

        </ul>

        {/* NAV ICONS */}
        <ul className='sidebar__ul-icons'>

          <li className='sidebar__li-icon'>
            <NavLink className='sidebar__link-icon' to={'/'}>
              <FaHouse className='sidebar__icon' />
            </NavLink>
          </li>
          <li className='sidebar__li-icon'>
            <NavLink className='sidebar__link-icon' to={'about'}>
            <FaUserGroup className='sidebar__icon' />
            </NavLink>
          </li>
          <li className='sidebar__li-icon'>
            <NavLink className='sidebar__link-icon' to={'work'}>
              <FaFolder className='sidebar__icon' />
            </NavLink>
          </li>
          <li className='sidebar__li-icon'>
            <NavLink className='sidebar__link-icon' to={'contact'}>
              <FaEnvelope className='sidebar__icon' />
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  )
}