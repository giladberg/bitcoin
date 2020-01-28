import React, { Component } from 'react'

export default class ContactFilter extends Component {
    state = {
        filterBy: {
            term: ''
        }
    }
    changeInput = (ev) => {
        const field = ev.target.name;
        let value = ev.target.value;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })

    }
    render() {
        return (
            <div className="flex column">
                <p>
                    Name: <input onChange={this.changeInput} type="text" name="term" value={this.state.filterBy.name} />
                </p>
                <p>
                    Email: <input onChange={this.changeInput} type="text" name="term" value={this.state.filterBy.email} />
                </p>
                <p>
                    Phone: <input onChange={this.changeInput} type="text" name="term" value={this.state.filterBy.phone} />
                </p>
            </div>
        )
    }
}
