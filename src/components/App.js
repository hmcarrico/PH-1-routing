import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link href="/#">Home</Link>
          <Link href='/#/About'>About</Link>
          </nav>
          <main>
          <Route exact path="/" component={Home}/>
          <Route path="/About" render={() => <About>
            <Route path="/About/faq" component={FAQ} />
            <Route path="/About/company" component={Company} />
            </About>} />
        </main>
      </div>
    );
  }
}

export default App;