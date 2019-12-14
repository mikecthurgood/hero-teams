import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = () =>
    <div className="navbar">
        <div className="links">
            <NavLink
                to="/"
                exact
                activeStyle={{
                    color: 'gold'
                }}
            >Home</NavLink>
            <NavLink
                className='link'
                to="/create-team"
                exact
                activeStyle={{
                    color: 'gold'
                }}
            >Create Team</NavLink>
            <NavLink
                className='link'
                to="/my-team"
                exact
                activeStyle={{
                    color: 'gold'
                }}
            >My Team</NavLink>
            <NavLink
                className='link'
                to="/teams"
                exact
                activeStyle={{
                    color: 'gold'
                }}
            >All Teams</NavLink>
        </div>
    </div>

export default NavBar