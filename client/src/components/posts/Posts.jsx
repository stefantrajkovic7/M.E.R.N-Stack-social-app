import React, { Component } from 'react';
import AddPost from "./add-post";
import PropTypes from 'prop-types';
import Spinner from '../shared/Spinner';
import Post from "./post/Post";

export class Posts extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts, loading } = this.props.post;
        let postUI;

        if (posts === null || loading) {
            postUI = <Spinner/>
        } else {
            postUI = <Post posts={posts} />
        }

        return (
            <div className="feed">
                <div className="container padd">
                    <div className="row">
                        <div className="col-md-12">
                            <AddPost/>
                            { postUI }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Posts.propTypes = {
    post: PropTypes.any.isRequired,
    getPosts: PropTypes.func.isRequired
};