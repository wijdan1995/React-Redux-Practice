import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }
    handlechange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Todo:</label>
                    <input type="text" value={this.state.content} onChange={this.handlechange} />
                </form>
            </div>
        )
    }
}

export default AddTodo
