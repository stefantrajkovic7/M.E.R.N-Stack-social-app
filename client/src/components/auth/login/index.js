import { connect } from 'react-redux';
import { Login } from './Login';
import { loginUser } from '../../../store/selectors';

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);