const User = require('../../../models/User');
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