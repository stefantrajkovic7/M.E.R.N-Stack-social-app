import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Register } from './Register';
import { registerUser } from '../../../store/selectors';

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));