import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../shared/TextGroupComponent';
import TextFieldArea from '../shared/TextAreaComponent';
import SelectList from '../shared/SelectListComponent';

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
        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio
        };
        this.props.createProfile(profileData, this.props.history)
    };

    render() {
        const {errors} = this.state;
        const options = [
            { label: '* Select Status', value: 0 },
            { label: 'IT Intern', value: 'IT Intern' },
            { label: 'Junior Developer', value: 'Junior Developer' },
            { label: 'Software Engineer', value: 'Software Engineer' },
            { label: 'Senior Software Engineer', value: 'Senior Software Engineer' },
            { label: 'Engineering Architect', value: 'Engineering Architect' },
            { label: 'Director of Engineering', value: 'Director of Engineering' },
        ];
        return (
            <div className="create-profile">
                <div className="container padd">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 tex-center">Create Your Profile</h1>
                            <small className="d-block pb-3">
                                * = required fields
                            </small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    name="handle"
                                    value={this.state.handle}
                                    info="A unique handle for your profile URL. Your full name, company name, nickname..."
                                    error={errors.handle}
                                    placeholder="* Profile Handle"
                                    onChange={this.onChange}/>

                                <SelectList
                                    name="status"
                                    value={this.state.status}
                                    error={errors.status}
                                    options={options}
                                    info="Give us an idea where you at in your career"
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name="company"
                                    value={this.state.company}
                                    info="Could be your own company or one you work for"
                                    error={errors.company}
                                    placeholder="Company"
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name="website"
                                    value={this.state.website}
                                    info="Could be your own website or a company one"
                                    error={errors.website}
                                    placeholder="Website"
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name="location"
                                    value={this.state.location}
                                    info="City or city & state suggested (eg. Belgrade, SR)"
                                    error={errors.location}
                                    placeholder="Location"
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name="skills"
                                    value={this.state.skills}
                                    info="Please use comma separated values (eg. HTML, CSS, Javascript...)"
                                    error={errors.skills}
                                    placeholder="* Dev Skills"
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name="githubusername"
                                    value={this.state.githubusername}
                                    info="Include your Github Username"
                                    error={errors.githubusername}
                                    placeholder="Github Username"
                                    onChange={this.onChange}/>

                                <TextFieldArea
                                    placeholder="Short Bio"
                                    name="bio"
                                    value={this.state.bio}
                                    info="Tell us little about yourself"
                                    error={errors.bio}
                                    onChange={this.onChange}/>

                                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4"/>
                            </form>
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