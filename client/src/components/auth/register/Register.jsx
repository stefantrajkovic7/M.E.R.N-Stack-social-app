import React, { Component } from 'react';

export class Register extends Component {
    render() {
        return (
            <div class="register">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 m-auto">
                            <h1 class="display-4 text-center">Sign Up</h1>
                            <p class="lead text-center">Create your DevConnector account</p>
                            <form action="create-profile.html">
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-lg" placeholder="Name" name="name" required />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-lg" placeholder="Email Address" name="email" />
                                    <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-lg" placeholder="Confirm Password" name="password2" />
                                </div>
                                <input type="submit" class="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}