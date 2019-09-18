import React, { Component } from 'react';
import Wijdan from './Components/Wijdan';

class App extends Component {
  state = {
    people: [
      { name: 'Wijdan', age: 25, hobbies: 'Embroidery, Crochet, And Sewing', id: 1 },
      { name: 'Joj', age: 22, hobbies: 'Video Games', id: 2 },
      { name: 'May', age: 20, hobbies: 'Video Games, Drawing', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App" >
        <h1>Welcome to My React App</h1>
        <Wijdan people={this.state.people} />
      </div>
    );
  }
}

export default App;
