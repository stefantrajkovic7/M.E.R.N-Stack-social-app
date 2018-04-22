const User = require('../../../models/User');
const Profile = require('../../../models/Profile');
const Post = require('../../../models/Post');
const helper = require('../../../helpers');

/**
 * @api {post} /posts/create
 *
 * @apiName POST Create Post
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Creates a Post
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.create = (req, res) => {
    const { errors, isValid } = helper.validatePost(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });

    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.status(500).json(err));
};

/**
 * @api {get} /posts
 *
 * @apiName GET Fetch All Posts
 *
 * @access Public
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Fetching a Posts
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.list = (req, res) => {
   Post
       .find()
       .sort({ date: -1 })
       .then(posts => res.json(posts))
       .catch(err => res.status(500).json(err));
};

/**
 * @api {get} /posts/find
 *
 * @apiName GET Fetch Single Post
 *
 * @access Public
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Fetching a Single Post
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.find = (req, res) => {
    Post
        .findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(500).json(err));
};

/**
 * @api {delete} /posts/:id
 *
 * @apiName DELETE Removes Post
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Removes Post
 *
 * @apiError (401) {String} message Not Authorized
 *
 * @apiError (500) {String} Internal Server error
 */

exports.remove = (req, res) => {
    Post.findOne({ user: req.user.id })
        .then(() => {
            Post.findById(req.params.id)
                .then(post => {
                    // Check for post owner
                    if (post.user.toString() !== req.user.id) {
                        return res.status(401).json({ auth: 'Not Authorized' });
                    }
                    // Removes a post
                    post
                        .remove()
                        .then(() => res.json({ success: true }))
                        .catch(err => res.status(500).json(err));
                })
        });
};

/**
 * @api {post} /posts/like/:id
 *
 * @apiName POST Likes Post
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Likes Post
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.like = (req, res) => {
    Profile.findOne({ user: req.user.id })
        .then(() => {
            Post.findById(req.params.id)
                .then(post => {
                    if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
                        return res.status(400).json({ error: 'Validation Error: User already liked this post' });
                    }

                    post.likes.unshift({ user: req.user.id });
                    post
                        .save()
                        .then(post => res.json(post));
                })
                .catch(err => res.status(500).json(err));
        });
};