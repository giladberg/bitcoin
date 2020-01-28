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
    render() {
        if (!this.state.contact) return 'loading...'
        return (
            <div>
                <h1>Name: {this.state.contact.name}</h1>
                <h1>Email: {this.state.contact.email}</h1>
                <h1>Phone: {this.state.contact.phone}</h1>
                <img src={`https://robohash.org/${this.state.contact._id}`} alt=""/>
                <button onClick={this.goBack}>Back</button>
            </div>
        )
    }
}
