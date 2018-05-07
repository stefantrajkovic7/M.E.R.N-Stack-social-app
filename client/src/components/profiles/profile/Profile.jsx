import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../../shared/Spinner';
import ProfileHeader from "./ProfileHeader";
import Background from "./Background";
import Github from "./Github";
import About from "./About";

export class Profile extends Component {

    componentDidMount() {
        if (this.props.match.params.handle) {
            this.props.getProfileByHandle(this.props.match.params.handle);
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.profile.profile === null || this.props.profile.loading) {
            this.props.history.push('/not-found')
        }
    }

    render() {
        const { profile, loading } =  this.props.profile;
        let profileUI;

        if (profile === null || loading) {
            profileUI = <Spinner />
        } else {
            profileUI = (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/profiles" className="btn btn-light mb-3 float-left">
                                Back To Profiles
                            </Link>
                        </div>
                        <div className="col-md-6"/>
                    </div>
                    <ProfileHeader profile={profile}/>
                    <About profile={profile}/>
                    <Background experience={profile.experience} education={profile.education} />
                    {
                        profile.githubusername
                            ? (<Github username={profile.githubusername}/>)
                            : null
                    }
                </div>
            )
        }

        return (
            <div className="profile">
                <div className="container padd">
                    <div className="row">
                        <div className="col-md-12">
                            { profileUI }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    getProfileByHandle: PropTypes.func.isRequired
};