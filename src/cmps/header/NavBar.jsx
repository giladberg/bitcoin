import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container flex">
                <div className='link-container'>
                    <NavLink exact={true} className="navbar-link" activeClassName="active" to='/'>
                        Home
                    </NavLink>
                </div>
                <div className='link-container'>
                    <NavLink exact={true} className="navbar-link" activeClassName="active" to='/contact'>
                        Contact
                    </NavLink>
                </div>
                <div className='link-container'>
                    <NavLink exact={true} className="navbar-link" activeClassName="active" to='/contact/edit/'>
                        Add new
                    </NavLink>
                </div>
            </div>
        )
    }
}
