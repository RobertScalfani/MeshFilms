import React from 'react';
import {Link} from "react-router-dom";

const NavBarItem = (
    {
        link = "#",
        title = "",
        icon = "",
    }
) => {

    const active = window.location.pathname.includes(link) || (window.location.pathname === ("/") && title === 'Home');

    return (
        <Link to={link} className={`list-group-item ${active ? 'active' : ''}`}>
            <div className="d-flex">
                <i className={`${icon} align-self-center`}></i>
                <span className='d-none d-sm-none d-md-none d-lg-block'>&nbsp;{title}</span>
            </div>
        </Link>
    );
}

export default NavBarItem;