import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <div>
          <a href="/#">Home</a>
          <a href="/#/about">About</a>
        </div>
      </div>
    );
  }
}

export default App;
