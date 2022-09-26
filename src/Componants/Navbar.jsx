import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import '../index.css';
function Navbar() {
    const location=useLocation()
    console.log(location);
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 max-auto">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <NavLink exact={'true'} className="navbar-brand" to="/">coding world</NavLink>
  
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{display:'flex',flexDirection:'row-reverse'}}>
                                        <li className="nav-item">
                                           <NavLink  class="nav-link active" aria-current="page" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink   className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar
//{(menu_active) => menu_active.isActive ? "active" : ""}
//className={(navData) => navData.isActive ? "menu_active" : ""}
//{location.pathname==='/'?'active':''}
