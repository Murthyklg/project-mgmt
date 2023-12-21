import './Sidebar.css';
import React from 'react';
import Dashboardicon from '../assets/dashboard_icon.svg';
import Addicon from '../assets/add_icon.svg'
import { NavLink } from 'react-router-dom';



export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='user'>
                {/* avatar and user name later */}
                <p>User name</p>
            </div>
            <nav className='links'>
                <ul>
                    <li>
                        <NavLink exact to='/'>
                            <img src={Dashboardicon} alt='dashboard icon'/>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Create'>
                            <img src={Addicon} alt='add project  icon'/>
                            <span>New Project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
      
    </div>
  );
}
