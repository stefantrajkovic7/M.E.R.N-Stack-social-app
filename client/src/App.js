import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import jwt_decode from 'jwt-decode';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Layout from "./components/layout";
import Dashboard from "./components/dashboard";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, logoutUser, clearCurrentProfile} from "./store/selectors";

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Clear current Profile
        store.dispatch(clearCurrentProfile());
        // Redirect to login
        window.location.href = '/login';
    }
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navigation />
                    <Route exact path="/" component={Layout} />
                    <div className="container">
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                    </div>
                    <Footer />
                </div>
            </Router>
        </Provider>

    );
  }
}

export default App;
