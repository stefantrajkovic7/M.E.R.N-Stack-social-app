import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../shared/Spinner';
import ProfileActions from './ProfileActions';
import {Link} from "react-router-dom";
import Experience from "../add-opt-fields/experience/Experience";

export class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    onDelete (e) {
        this.props.deleteAccount();
        this.props.logoutUser();
    }

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        let dashboardUI;

        if (profile === null || loading) {
            dashboardUI = <Spinner />
        } else {
            if (Object.keys(profile).length > 0) {
                dashboardUI = (
                    <div>
                        <p className="lead text-muted">Welcome <Link to={`/profile/${profile.handle}`}> { user.name } </Link></p>
                        <ProfileActions />
                        <Experience experience={profile.experience}/>
                        <div style={{ marginBottom: '60px' }}>
                            <button onClick={this.onDelete.bind(this)} className="btn btn-danger">
                                Delete My Account
                            </button>
                        </div>
                    </div>

                )
            } else {
                dashboardUI = (
                    <div>
                        <p className="lead text-muted">Welcome { user.name }</p>
                        <p>You Have not yet setup a profile</p>
                        <Link to="/create-profile" className="btn btn-lg btn-info">
                            Create Profile
                        </Link>
                    </div>
                )
            }
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
    logoutUser: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};