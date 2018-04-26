import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CreateProfile } from './CreateProfile';
import {createProfile} from "../../store/selectors";

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));