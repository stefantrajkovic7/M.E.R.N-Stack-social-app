import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddExperience } from './AddExperience';
import { addExperience } from "../../../store/selectors";

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(withRouter(AddExperience));