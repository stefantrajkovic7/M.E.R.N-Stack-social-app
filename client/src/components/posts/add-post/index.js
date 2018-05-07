
import { connect } from 'react-redux';
import { AddPost } from './AddPost';
import { addPost } from "../../../store/selectors";

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { addPost })(AddPost);