import React, { Component } from 'react'
import ContactPreview from '../cmps/ContactPreview.jsx'
export default class ContactList extends Component {
    render() {
        return (
            <ul>
               {this.props.contacts.map(contact=>{
                   return <li key={contact._id}>
                       <ContactPreview contact={contact}/>
                   </li>
               })}
            </ul>
        )
    }
}
