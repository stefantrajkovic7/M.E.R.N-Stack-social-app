import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../../shared/TextGroupComponent';
import TextFieldArea from '../../shared/TextAreaComponent';

export class AddExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            title: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
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

        const data = {
            company: this.state.company,
            title: this.state.title,
            location: this.state.location,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        };

        this.props.addExperience(data, this.props.history)
    };

    onCheck = e => this.setState({
            disabled: !this.state.disabled,
            current: !this.state.current
    });

    render() {
        const { errors } = this.state;
        return (
            <div className="add-exp">
                <div className="container padd">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">Go Back</Link>
                            <h1 className="display-4 text-center">Add Experience</h1>
                            <p className="lead text-center">Add any job or position that you had in the past or current</p>
                            <small className="d-block pb3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    name="company"
                                    value={this.state.company}
                                    error={errors.company}
                                    placeholder="* Company"
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name="title"
                                    value={this.state.title}
                                    error={errors.title}
                                    placeholder="* Job Title"
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name="location"
                                    value={this.state.location}
                                    error={errors.location}
                                    placeholder="Location"
                                    onChange={this.onChange}/>

                                <h6>From Date</h6>
                                <TextFieldGroup
                                    name="from"
                                    type="date"
                                    value={this.state.from}
                                    error={errors.from}
                                    onChange={this.onChange}/>

                                <h6>To Date</h6>
                                <TextFieldGroup
                                    name="to"
                                    type="date"
                                    value={this.state.to}
                                    error={errors.to}
                                    disabled={this.state.disabled ? 'disabled' : ''}
                                    onChange={this.onChange}/>
                                <div className="form-check mb-4">
                                    <input
                                        className="form-check-input"
                                        name="current"
                                        value={this.state.current}
                                        onChange={this.onCheck}
                                        id="current"
                                        checked={this.state.current}
                                        type="checkbox"/>
                                    <label htmlFor="current" className="form-check-label">Current Job</label>
                                </div>

                                <TextFieldArea
                                    name="description"
                                    value={this.state.description}
                                    error={errors.description}
                                    placeholder="Description"
                                    info="Tell us about the position"
                                    onChange={this.onChange}/>

                                <input type="submit" value="Submit" className="btn sub btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AddExperience.propTypes = {
    profile: PropTypes.object.isRequired,
    addExperience: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};