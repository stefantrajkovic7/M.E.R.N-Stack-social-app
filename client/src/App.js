import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Layout from "./components/layout";
import Register from "./components/auth/register";
import Login from "./components/auth/login";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Route exact path="/" component={Layout} />
                <div className="container">
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                </div>
                <Footer />
            </div>
        </Router>
    );
  }
}

export default App;
