import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class ContactPreview extends Component {
    render() {
        return (
            <div className="contact-preview-container flex  align-center">
                <Link to={`/contact/${this.props.contact._id}`}>
                <img src={`https://robohash.org/${this.props.contact._id}`} width="200px" height="200px" alt=""/>
                <p>Name: {this.props.contact.name}</p>
                </Link>
            </div>
        )
    }
}
