import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../shared/TextGroupComponent';

export class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            errors: {}
        }
    }

    render() {
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 tex-center">Create Your Profile</h1>
                            <small className="d-block pb-3">
                                * = required fields
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};