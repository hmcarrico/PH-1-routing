import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import { Route, Link } from 'react-router-dom';
import People from './People/People';
import Character from './Character/Character';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/people">People</Link>
        </nav>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => <About>
            <Route path="/about/faq" component={FAQ} />
            <Route path="/about/company" component={Company} />
          </About>} />
          <Route exact path="/people" component={People} />
          <Route path="/people/:id" component={Character} />
        </div>
      </div>
    );
  }
}

export default App;
