import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddEducation } from './AddEducation';
import { addEducation } from "../../../store/selectors";

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(withRouter(AddEducation));