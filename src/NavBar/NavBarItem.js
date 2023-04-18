import React from 'react';
import {Link} from "react-router-dom";

const NavBarItem = (
    {
        link = "#",
        title = "",
        icon = "",
    }
) => {

    return (
        <Link to={link} className={`list-group-item`}>
            <div className="d-flex">
                <i className={`${icon} align-self-center`}></i>
                <span className="d-none d-xl-block d-xxl-block">&nbsp;{title}</span>
            </div>
        </Link>
    );
}

export default NavBarItem;