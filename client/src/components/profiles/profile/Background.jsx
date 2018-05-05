import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Background extends Component {

    render() {
        const { profile } = this.props;
        return (
            <div className="background">

            </div>
        )
    }
}

Background.propTypes = {
    profile: PropTypes.object.isRequired
};

export default Background;