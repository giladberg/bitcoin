import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class ContactPreview extends Component {
    render() {
        return (
            <div className="contact-preview-container flex column align-center">
                <p>Name: {this.props.contact.name}</p>
                <Link to={`/contact/${this.props.contact._id}`}>
                <img src={`https://robohash.org/${this.props.contact._id}`} alt=""/>
                </Link>
            </div>
        )
    }
}
