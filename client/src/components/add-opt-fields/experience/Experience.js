import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from "../../../store/selectors";

class Experience extends Component {

    onDeleteClick(id) {
        this.props.deleteExperience(id)
    };

    render() {
        const experience = this.props.experience.map(x => (
            <tr key={x._id}>
                <td>{x.company}</td>
                <td>{x.title}</td>
                <td>
                    <Moment format="YYYY/MM/DD">{x.from}</Moment> -
                        {x.to === null ? (' Current') : (<Moment format="YYYY/MM/DD">{x.to}</Moment>)}
                </td>
                <td>
                    <button onClick={this.onDeleteClick.bind(this, x._id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        ));
        return (
            <div>
                <h4 className="mb-4">Experience Details</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Years</th>
                            <th></th>
                        </tr>
                        { experience }
                    </thead>
                </table>
            </div>
        );
    }
}

Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//     auth: state.auth,
//     profile: state.profile
// });

export default connect(null, { deleteExperience })(Experience);
