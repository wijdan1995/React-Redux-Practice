import React, { Component } from 'react';
import People from './Components/People';
import AddPeople from './Components/AddPeople'

class App extends Component {
  state = {
    people: [
      { name: 'Wijdan', age: 25, hobbies: 'Embroidery, Crochet, And Sewing', id: 1 },
      { name: 'Joj', age: 22, hobbies: 'Video Games', id: 2 },
      { name: 'May', age: 20, hobbies: 'Video Games, And Drawing', id: 3 }
    ]
  }
  addPeople = (person) => {
    // console.log(person)
    person.id = Math.random()
    let people = [...this.state.people, person]
    this.setState({
      people: people
    })
  }
  render() {
    return (
      <div className="App" >
        <h1>Welcome to My React App</h1>
        <People people={this.state.people} />
        <AddPeople addPeople={this.addPeople} />
      </div>
    );
  }
}

export default App;
