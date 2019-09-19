import React, { Component } from 'react'

class AddPeople extends Component {
    state = {
        name: null,
        age: null,
        hobbies: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state);
    }
    render() {
        return (
            <div>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <br />
                    <label htmlFor="name">Hobbies:</label>
                    <input type="text" id="hobbies" onChange={this.handleChange} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPeople
