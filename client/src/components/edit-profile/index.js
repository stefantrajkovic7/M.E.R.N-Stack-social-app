import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { EditProfile } from './EditProfile';
import {createProfile, getCurrentProfile} from "../../store/selectors";

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));