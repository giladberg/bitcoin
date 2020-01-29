import React, { Component } from 'react'
import ContactService from '../services/ContactService.js'
import { observer, inject } from 'mobx-react'

@inject('contactStore')
@observer
 class ContactDetailsPage extends Component {
    state = { contact: null }
    componentDidMount() {
       
        this.loadContact()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadContact();
        }
    }
    loadContact =  () => {
          this.props.contactStore.getContactById(this.props.match.params.id)
    }
    goBack=()=>{
        this.props.history.push('/contact')
    }
    goToEditPage=()=>{
        this.props.history.push('/contact/edit/'+this.props.match.params.id)
    }
    render() {
        const {currentContact}=this.props.contactStore
        if (!currentContact) return 'loading...'
        return (
            <div className="contact-details-container flex column align-center">
                <p>Name: {currentContact.name}</p>
                <p>Email: {currentContact.email}</p>
                <p>Phone: {currentContact.phone}</p>
                <img src={`https://robohash.org/${currentContact._id}`} width="300px" height="300px" alt=""/>
                <button onClick={this.goBack}>Back</button>
                <button onClick={this.goToEditPage}>Edit</button>
            </div>
        )
    }
}

export default ContactDetailsPage