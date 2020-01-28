import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container flex">
                <div className='link-container'>
                    <NavLink activeClassName="active" to='/'>
                        Home
                    </NavLink>
                </div>
                <div className='link-container'>
                    <NavLink activeClassName="active" to='/contact'>
                       Contact
                    </NavLink>
                </div>
            </div>
        )
    }
}
