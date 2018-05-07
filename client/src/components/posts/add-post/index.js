
import { connect } from 'react-redux';
import { AddPost } from './AddPost';
import { addPost } from "../../../store/selectors";

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { addPost })(AddPost);