import { connect } from 'react-redux';
import { Dashboard } from './Dashboard';
import { getCurrentProfile } from "../../store/selectors";

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);