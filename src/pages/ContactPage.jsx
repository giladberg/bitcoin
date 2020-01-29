import React, { Component } from 'react'
import ContactList from '../cmps/ContactList.jsx'
import ContactFilter from '../cmps/ContactFilter.jsx'
import { observer, inject } from 'mobx-react'

@inject('contactStore')
@observer
class ContactPage extends Component {
    componentDidMount() {
        this.props.contactStore.loadContacts()
    }
    onSetFilter = (filterBy) => {
        this.props.contactStore.setFilter(filterBy)
    }
    render() {
        return (
            <div>
                <ContactFilter onSetFilter={this.onSetFilter} />
                <ContactList contacts={this.props.contactStore.contacts} />
            </div>
        )
    }
}
export default ContactPage