import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldArea from '../../shared/TextAreaComponent';

export class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
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
        const { user } = this.props.auth;

        const newPost = {
            text: this.state.text,
            name: user.name,
            avatar: user.avatar
        };
        this.props.addPost(newPost);
        this.setState({ text: '' });
    };

    render() {
        const {errors} = this.state;
        return (
            <div className="post-form mb-3">
                <div className="card card-info">
                    <div className="card-header bg-info text-white">
                        Say Something...
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <TextFieldArea
                                    className="form-control form-control-lg"
                                    name="text"
                                    value={this.state.text}
                                    onChange={this.onChange}
                                    error={errors.text}
                                    placeholder="Create a post"/>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

AddPost.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};