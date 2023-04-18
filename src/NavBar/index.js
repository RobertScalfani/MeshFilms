import React from "react";
import navigationOptions from "./NavOptions.json";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
    return (
        <div className="list-group">
            {navigationOptions.map(navOpt => {
                return (
                    <NavBarItem key={navOpt._id}
                                    link={navOpt.link}
                                    title={navOpt.title}
                                    icon={navOpt.icon}
                    />
                )
            })}
        </div>
    );
};

export default NavBar;