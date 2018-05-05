import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Github extends Component {

    render() {
        const { profile } = this.props;
        return (
            <div className="github">

            </div>
        )
    }
}

Github.propTypes = {
    profile: PropTypes.object.isRequired
};

export default Github;