
import { connect } from 'react-redux';
import { AddComment } from './AddComment';
import { addComment } from "../../../store/selectors";

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { addComment })(AddComment);