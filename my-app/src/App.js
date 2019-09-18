import React from 'react';
import Wijdan from './Components/Wijdan';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <Wijdan name='Wijdan' age='25' hobbies='Embroidery, Crochet, And Sewing' />
      <br />
      <Wijdan name='Joj' age='20' hobbies='Video Games' />
    </div>
  );
}

export default App;
