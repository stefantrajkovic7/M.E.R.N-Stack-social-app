import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../shared/TextGroupComponent';

export class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const newUser =  {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };

        this.props.registerUser(newUser, this.props.history);

    };

    render() {
        const { errors } = this.state;
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevConnector account</p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    name='name'
                                    value={this.state.name}
                                    placeholder='Name'
                                    error={errors.name}
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name='email'
                                    type="email"
                                    value={this.state.email}
                                    placeholder='Email Address'
                                    error={errors.email}
                                    info='This site uses Gravatar so if you want a profile image, use a Gravatar email'
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name='password'
                                    type="password"
                                    value={this.state.password}
                                    placeholder='Password'
                                    error={errors.password}
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name='password2'
                                    type="password"
                                    value={this.state.password2}
                                    placeholder='Confirm Password'
                                    error={errors.password2}
                                    onChange={this.onChange}/>

                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};