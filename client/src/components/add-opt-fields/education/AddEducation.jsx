import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextFieldGroup from '../../shared/TextGroupComponent';
import TextFieldArea from '../../shared/TextAreaComponent';

export class AddEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: '',
            degree: '',
            fieldofstudy: '',
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
            school: this.state.school,
            degree: this.state.degree,
            fieldofstudy: this.state.fieldofstudy,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        };

        this.props.addEducation(data, this.props.history)
    };

    onCheck = e => this.setState({
        disabled: !this.state.disabled,
        current: !this.state.current
    });

    render() {
        const { errors } = this.state;
        return (
            <div className="add-edu">
                <div className="container padd">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">Go Back</Link>
                            <h1 className="display-4 text-center">Add Education</h1>
                            <p className="lead text-center">Add any education or school that you had in the past or current</p>
                            <small className="d-block pb3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    name="school"
                                    value={this.state.school}
                                    error={errors.school}
                                    placeholder="* School"
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name="degree"
                                    value={this.state.degree}
                                    error={errors.degree}
                                    placeholder="* Degree or Certification"
                                    onChange={this.onChange}/>

                                <TextFieldGroup
                                    name="fieldofstudy"
                                    value={this.state.fieldofstudy}
                                    error={errors.fieldofstudy}
                                    placeholder="Field Of Study"
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
                                    <label htmlFor="current" className="form-check-label">Current School</label>
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

AddEducation.propTypes = {
    profile: PropTypes.object.isRequired,
    addEducation: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};