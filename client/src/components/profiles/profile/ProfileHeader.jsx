import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from "../../../helpers/isEmpty";

class ProfileHeader extends Component {

    render() {
        const { profile } = this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-info text-white mb-3">
                        <div className="row">
                            <div className="col-4 col-md-3 m-auto">
                                <img className="rounded-circle" src={profile.user.avatar} alt="Avatar" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="display-4 text-center">{profile.user.name}</h1>
                            <p className="lead text-center">
                                {profile.status}
                                {isEmpty(profile.company) ? null : (<span> at {profile.company}</span>)}
                            </p>
                            <p>
                                {isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}
                            </p>
                            <p>
                                {
                                    isEmpty(profile.website) ? null : (
                                        <a
                                            className="text-white p-2"
                                            href={profile.website}
                                            target="_blank">
                                            <i className="fas fa-globe fa-2x"/>
                                        </a>
                                    )
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ProfileHeader.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileHeader;