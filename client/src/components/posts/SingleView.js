import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../shared/Spinner';
import { getPost } from "../../store/selectors";
import PostItem from "./post/PostItem";
import AddComment from "./comments";

class SingleView extends Component {
    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render() {
        const { post, loading } = this.props.post;
        let postUI;

        if (post === null || loading || Object.keys(post).length === 0) {
            postUI = <Spinner />
        } else {
            postUI = (
                <div>
                    <PostItem post={post} showActions={false}/>
                    <AddComment postId={post._id}/>
                </div>
            )
        }

        return (
            <div className="view">
                <div className="container padd">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/feed" className="btn btn-light mb-3">
                                Back To Feed
                            </Link>
                            { postUI }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SingleView.propTypes = {
    post: PropTypes.any.isRequired,
    getPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(SingleView);
