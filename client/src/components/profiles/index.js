import { connect } from 'react-redux';
import { Profiles } from './Profiles';
import { getProfiles } from "../../store/selectors";

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);