import React, { Component } from 'react'
import ContactService from '../services/ContactService.js'
import ContactList from '../cmps/ContactList.jsx'
import ContactFilter from '../cmps/ContactFilter.jsx'

export default class ContactPage extends Component {
    state={contacts:[]}
   async componentDidMount(){
     const contacts=await   ContactService.getContacts()
     this.setState({contacts})
    }
    onSetFilter=async(filterBy)=>{
        const contacts= await ContactService.getContacts(filterBy)
        this.setState({contacts})
    }
    render() {
        return (
            <div>
             <ContactFilter onSetFilter={this.onSetFilter}/>   
            <ContactList contacts={this.state.contacts}/>
            </div>
        )
    }
}
