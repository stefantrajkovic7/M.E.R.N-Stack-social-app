import { connect } from 'react-redux';
import { Dashboard } from './Dashboard';
import { getCurrentProfile } from "../../store/selectors";

export default connect(null, { getCurrentProfile })(Dashboard);