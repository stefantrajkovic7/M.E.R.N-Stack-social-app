import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import PrivateRoute from "./components/shared/PrivateRoute";
import CreateProfile from "./components/create-portfolio";
import EditProfile from "./components/edit-profile";
import AddExperience from "./components/add-opt-fields/experience";
import AddEducation from "./components/add-opt-fields/education";
import Profiles from "./components/profiles";
import Profile from "./components/profiles/profile";
// import NotFound from "./components/not-found/NotFound";
import Posts from "./components/posts";

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
                        <Switch>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/profiles" component={Profiles}/>
                            <Route exact path="/profile/:handle" component={Profile}/>
                        </Switch>
                        <Switch>
                            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                        </Switch>
                        <Switch>
                            <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
                        </Switch>
                        <Switch>
                            <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
                        </Switch>
                        <Switch>
                            <PrivateRoute exact path="/add-experience" component={AddExperience}/>
                        </Switch>
                        <Switch>
                            <PrivateRoute exact path="/add-education" component={AddEducation}/>
                        </Switch>
                        <Switch>
                            <PrivateRoute exact path="/feed" component={Posts}/>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </Provider>

    );
  }
}

export default App;
