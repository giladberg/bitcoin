import React, { Component } from 'react'
import ContactService from '../services/ContactService.js'
export default class ContactDetailsPage extends Component {
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
    loadContact = async () => {
        const contact = await ContactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }
    goBack=()=>{
        this.props.history.push('/contact')
    }
    goToEditPage=()=>{
        this.props.history.push('/contact/edit/'+this.props.match.params.id)
    }
    render() {
        if (!this.state.contact) return 'loading...'
        return (
            <div className="contact-details-container flex column align-center">
                <p>Name: {this.state.contact.name}</p>
                <p>Email: {this.state.contact.email}</p>
                <p>Phone: {this.state.contact.phone}</p>
                <img src={`https://robohash.org/${this.state.contact._id}`} width="300px" height="300px" alt=""/>
                <button onClick={this.goBack}>Back</button>
                <button onClick={this.goToEditPage}>Edit</button>
            </div>
        )
    }
}
