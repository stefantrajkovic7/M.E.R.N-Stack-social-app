import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../shared/Spinner';

export class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    render() {
        // const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        let dashboardUI;

        if (profile === null || loading) {
            dashboardUI = <Spinner />
        } else {
            dashboardUI = <h1>DATA</h1>
        }

        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Dashboard</h1>
                            { dashboardUI }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};