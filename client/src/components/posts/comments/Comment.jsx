import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from "./CommentItem";

class Comment extends Component {
    render() {
        const { comments, postId } = this.props;
        return comments.map(comment => <CommentItem key={comment._id} postId={postId} comment={comment} />)
    }
}

Comment.propTypes = {
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired,
};

export default Comment;
