import { connect } from 'react-redux';
import { CreateProfile } from './CreateProfile';

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps)(CreateProfile);