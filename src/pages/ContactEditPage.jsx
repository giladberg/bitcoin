import React, { Component } from 'react'
import ContactService from '../services/ContactService.js'
import { observer, inject } from 'mobx-react'

@inject('contactStore')
@observer
 class ContactEditPage extends Component {
    state = { contact: null }
    componentDidMount() {
        if (this.props.match.params.id) this.loadContact()
        else this.setContact()


    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            if (this.props.match.params.id) this.loadContact()
            else this.setContact()
        }
    }
    setContact = () => {
        const contact = {
            name: '',
            email: '',
            phone: ''
        }
        this.setState({ contact })
    }
    loadContact = async () => {
       await this.props.contactStore.getContactById(this.props.match.params.id)
       const {currentContact}=this.props.contactStore
        this.setState({contact: currentContact })
    }

    changeInput = async (ev) => {
        const field = ev.target.name;
        let value = ev.target.value;
        let contact = this.state.contact
        contact[field] = value
        this.setState({ contact })

    }
    onSave = async () => {
        await ContactService.saveContact(this.state.contact)
    }
    onDelete = async () => {
        await ContactService.deleteContact(this.state.contact._id)
        this.props.history.push('/contact')
    }
    onGoBack = () => {
        this.props.history.push('/contact')
    }
    render() {
        if (!this.state.contact) return 'loading...'
        return (
            <div className="contact-details-container flex column align-center">
                <p>Name: <input type="text" name="name" onChange={this.changeInput} value={this.state.contact.name} /></p>
                <p>Email: <input type="text" name="email" onChange={this.changeInput} value={this.state.contact.email} /></p>
                <p>Phone: <input type="text" name="phone" onChange={this.changeInput} value={this.state.contact.phone} /></p>
                {this.state.contact._id &&
                    <img src={`https://robohash.org/${this.state.contact._id}`} width="300px" height="300px" alt="" />
                }
                <div className="buttons-list">
                    <button onClick={this.onSave}>Save</button>
                    <button onClick={this.onDelete}>Delete</button>
                    <button onClick={this.onGoBack}>Back</button>
                </div>
            </div>
        )
    }
}
export default ContactEditPage