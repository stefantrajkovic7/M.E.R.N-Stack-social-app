import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
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

Dashboard.propTypes = {

};