import React, { Component } from 'react'

class Wijdan extends Component {
    render() {
        // console.log(this.props)
        const { people } = this.props
        const peopleList = people.map(person => {
            return (
                <div className="wijdan" key={person.id}>
                    <div>
                        Name: {person.name}
                    </div>
                    <div>
                        Age: {person.age}
                    </div>
                    <div>
                        Hobbies: {person.hobbies}
                    </div>
                    <br />
                </div>
            )
        })
        return (
            <div className="people-list">
                {peopleList}
            </div>
        )
    }
}

export default Wijdan;
