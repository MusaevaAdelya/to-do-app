import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {

    const navLinkBaseStyles="bg-white bg-opacity-5 transition duration-500 py-1 ";
    const navLinkPrimaryStyles=navLinkBaseStyles+"  hover:bg-primary";
    const navLinkDeleteStyles=navLinkBaseStyles+" hover:bg-red-500"

    return (
        <nav className=" grid grid-cols-4 text-gray-300  text-center my-5">
            <NavLink to="/all" className={navLinkPrimaryStyles+" rounded-l-md"}>
                All
            </NavLink>
            <NavLink to="/active" className={navLinkPrimaryStyles}>
                Active
            </NavLink>
            <NavLink to="/done" className={navLinkPrimaryStyles}>
                Done
            </NavLink>
            <NavLink to="/deleted" className={navLinkDeleteStyles+ " rounded-r-md"}>
                Deleted
            </NavLink>
        </nav>
    )
}

export default NavBar
