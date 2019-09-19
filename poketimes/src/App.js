import React from 'react';
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'

import { BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
