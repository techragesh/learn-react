import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Route, BrowserRouter } from 'react-router-dom';
import Api from './components/Api';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/api" component={Api} />
          <Route path="/post/:post_id" component={Post} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
