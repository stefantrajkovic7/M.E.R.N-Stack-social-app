import React, { Component } from 'react';
import AddPost from "./add-post";
// import PropTypes from 'prop-types';
// import Spinner from '../shared/Spinner';

export class Posts extends Component {

    // componentDidMount() {
    //     this.props.getPosts();
    // }

    render() {
        return (
            <div className="feed">
                <div className="container padd">
                    <div className="row">
                        <div className="col-md-12">
                            <AddPost/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Posts.propTypes = {
//     // addPost: PropTypes.func.isRequired
// };