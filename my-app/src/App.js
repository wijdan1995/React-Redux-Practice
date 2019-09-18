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
  render() {
    return (
      <div className="App" >
        <h1>Welcome to My React App</h1>
        <People people={this.state.people} />
        <AddPeople />
      </div>
    );
  }
}

export default App;
