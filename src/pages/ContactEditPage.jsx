import React, { Component } from 'react'
import ContactService from '../services/ContactService.js'
export default class ContactEditPage extends Component {
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

    changeInput = async (ev) => {
        const field = ev.target.name;
        let value = ev.target.value;
        let contact=this.state.contact
        await this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
        this.props.onSetFilter(this.state.filterBy)
    }
    render() {
        if (!this.state.contact) return 'loading...'
        return (
            <div className="contact-details-container flex column align-center">
                <p>Name: <input type="text" name="" onChange={this.changeInput} value={this.state.contact.name}/></p>
                <p>Email: {this.state.contact.email}</p>
                <p>Phone: {this.state.contact.phone}</p>
                <img src={`https://robohash.org/${this.state.contact._id}`} alt="" />
               
            </div>
        )
    }
}
