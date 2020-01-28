import React, { Component } from 'react'

export default class ContactFilter extends Component {
    state = {
        filterBy: {
           term:''
        }
    }
    changeInput = async (ev) => {
        const field = ev.target.name;
        let value = ev.target.value;
        await this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
        this.props.onSetFilter(this.state.filterBy)
    }
    render() {
        return (
            <div>
                <p>
                    Name: <input onChange={this.changeInput} type="text" name="term" value={this.state.filterBy.name}/>
                    Email: <input onChange={this.changeInput} type="text" name="term" value={this.state.filterBy.email}/>
                    Phone: <input onChange={this.changeInput} type="text" name="term" value={this.state.filterBy.phone}/>
                </p>
            </div>
        )
    }
}
