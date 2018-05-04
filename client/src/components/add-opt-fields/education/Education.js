import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from "../../../store/selectors";

class Education extends Component {

    onDeleteClick(id) {
        this.props.deleteEducation(id)
    };

    render() {
        const education = this.props.education.map(x => (
            <tr key={x._id}>
                <td>{x.school}</td>
                <td>{x.degree}</td>
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
                <h4 className="mb-4">Education Details</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Years</th>
                        <th></th>
                    </tr>
                    { education }
                    </thead>
                </table>
            </div>
        );
    }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//     auth: state.auth,
//     profile: state.profile
// });

export default connect(null, { deleteEducation })(Education);
