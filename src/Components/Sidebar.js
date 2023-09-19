import React from 'react'
import 
{BsCart3, BsFillTagFill, BsFillGrid3X3GapFill, BsGrid1X2Fill}
 from 'react-icons/bs'

 import {FaRegCalendar} from 'react-icons/fa'

 import {AiFillSetting, AiOutlineUser, AiOutlineDashboard} from 'react-icons/ai'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
             BOARD .
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <AiOutlineDashboard className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillTagFill className='icon'/> Transaction
 
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaRegCalendar className='icon'/> Schedules
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <AiOutlineUser className='icon'/> Users
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <AiFillSetting className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar