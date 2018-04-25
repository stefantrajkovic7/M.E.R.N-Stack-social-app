import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

// Dashboard.propTypes = {
//
// };