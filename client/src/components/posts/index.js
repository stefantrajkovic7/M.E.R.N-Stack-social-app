import { connect } from 'react-redux';
import { Posts } from './Posts';
import { getPosts } from "../../store/selectors";

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);