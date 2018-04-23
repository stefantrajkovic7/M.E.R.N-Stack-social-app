import React, { Component } from 'react';

export class Layout extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                    <div className="container">
                        <a className="navbar-brand" href="landing.html">DevConnector</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="mobile-nav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="profiles.html"> Developers
                                    </a>
                                </li>
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="register.html">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="login.html">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="landing">
                    <div className="dark-overlay landing-inner text-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="display-3 mb-4">Developer Connector
                                    </h1>
                                    <p className="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
                                    <hr />
                                    <a href="register.html" className="btn btn-lg btn-info mr-2">Sign Up</a>
                                    <a href="login.html" className="btn btn-lg btn-light">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="bg-dark text-white mt-5 p-4 text-center">
                    Copyright &copy; 2018 Dev Connector <a rel="noopener noreferrer" className="footLink" target="_blank" href="https://github.com/saibot777"> Stefan Trajkovic</a>
                </footer>
            </div>
        )
    }
}
