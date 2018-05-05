import { connect } from 'react-redux';
import { Profile } from './Profile';
import { getProfiles } from "../../store/selectors";

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profile);