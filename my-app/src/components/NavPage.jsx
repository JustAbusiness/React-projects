import React, { Fragment } from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";

const ListLink = [
    {
        id: 1,
        to: "/",
        title: "Home"
    },
    {
        id: 2,
        to: "/blog",
        title: "Blog"
    },
    {
        id: 3,
        to: "/profile",
        title: "Profile"
    },
    {
        id: 4,
        to: "/random",
        title: "Contact-us"
    },

];

const NavPage = () => {

    return (
        <Fragment>
            <div className="p-5 bg-white shadow-sm flex items-center justify-center gap-x-5">
                {ListLink.map((item) => (
                    <NavLink to={item.to} className={({ isActive }) => (isActive ? 'text-green-600' : '')} key={item.id}> {item.title} </NavLink>
                ))}
            </div>

            <Outlet></Outlet>
        </Fragment>
    );
};

export default NavPage;