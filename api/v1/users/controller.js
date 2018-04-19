const User = require('../../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

/**
 * @api {post} /users/create Create user
 *
 * @apiName Register User
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (201) {String} Created New User
 *
 * @apiError (400) {String} message Validation error
 *
 * @apiError (500) {String} Internal Server error
 */
exports.create = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({email: 'Validation Error: Email already exists'});
            } else {
                const avatar = gravatar.url(req.body.email, {
                    s: '200', // Size
                    r: 'pg', // Rating
                    d: 'mm' // Default
                });
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.status(201).json(user))
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({ message: 'Internal server error' });
                            });
                    });
                });
            }
        });
};