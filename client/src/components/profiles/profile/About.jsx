import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {

    render() {
        const { profile } = this.props;
        return (
            <div className="about">

            </div>
        )
    }
}

About.propTypes = {
    profile: PropTypes.object.isRequired
};

export default About;