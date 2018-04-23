import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Layout from "./components/layout";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Route exact path="/" component={Layout} />
                <Footer />
            </div>
        </Router>
    );
  }
}

export default App;
