import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from "./PostItem";

class Post extends Component {

    render() {
        const { posts } = this.props;
        return posts.map(post => <PostItem key={post._id} post={post}/>)
    }
}

Post.propTypes = {
    posts: PropTypes.any.isRequired
};

export default Post;

