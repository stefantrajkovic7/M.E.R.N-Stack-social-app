import { connect } from 'react-redux';
import { Posts } from './Posts';
// import { addPost } from "../../store/selectors";

const mapStateToProps = state => ({
    // profile: state.profile
});

export default connect(mapStateToProps, { })(Posts);