import React, { Component } from 'react'
import ContactPreview from '../cmps/ContactPreview.jsx'
export default class ContactList extends Component {
    render() {
        return (
            <ul className="contact-list-container clean-list flex column align-center">
               {this.props.contacts.map(contact=>{
                   return <li className="contact-list-li-container" key={contact._id}>
                       <ContactPreview contact={contact}/>
                   </li>
               })}
            </ul>
        )
    }
}
