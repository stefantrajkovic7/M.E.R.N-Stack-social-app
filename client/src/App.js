import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Layout from "./components/layout";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Layout} />
            </div>
        </Router>
    );
  }
}

export default App;
