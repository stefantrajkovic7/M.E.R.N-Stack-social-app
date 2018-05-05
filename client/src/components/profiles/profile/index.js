import { connect } from 'react-redux';
import { Profile } from './Profile';
import { getProfileByHandle } from "../../../store/selectors";

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);