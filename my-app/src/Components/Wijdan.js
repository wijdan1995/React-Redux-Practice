import React, { Component } from 'react'

class Wijdan extends Component {
    render() {
        // console.log(this.props)
        const { name, age, hobbies } = this.props
        return (
            <div className="wijdan">
                <div>
                    Name: {name}
                </div>
                <div>
                    Age: {age}
                </div>
                <div>
                    Hobbies: {hobbies}
                </div>
            </div>
        )
    }
}

export default Wijdan;
