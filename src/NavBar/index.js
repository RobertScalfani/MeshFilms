import React from "react";
import navigationOptions from "./NavOptions.json";
import NavBarItem from "./NavBarItem";

const NavBar = ({role}) => {
    return (
        <div className="list-group">
            {navigationOptions.map(navOpt => {
                const renderOption = (navOpt.adminOnly && role === "admin") || (navOpt.premiumOnly && role === "admin") || (!navOpt.adminOnly && !navOpt.premiumOnly);
                if (renderOption) {
                    return (
                        <NavBarItem key={navOpt._id}
                            link={navOpt.link}
                            title={navOpt.title}
                            icon={navOpt.icon}
                        />)
                }
                return (<></>)
                })
            }
        </div>
    );
};

export default NavBar;