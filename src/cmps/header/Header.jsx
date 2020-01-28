import React, { Component } from 'react'
import NavBar from './NavBar.jsx'
export default class Header extends Component {
    render() {
        return (
            <div className="flex justify-center">
                <NavBar/>
            </div>
        )
    }
}
