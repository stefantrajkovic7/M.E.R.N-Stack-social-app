const User = require('../../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../../config/keys');
const passport = require('passport');
const helper = require('../../../helpers');

/**
 * @api {post} /users/create Create user
 *
 * @apiName Register User
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Created New User
 *
 * @apiError (400) {String} message Validation error
 *
 * @apiError (500) {String} Internal Server error
 */
exports.create = (req, res) => {
    console.log('WAAAAAAA')
    const { errors, isValid } = helper.validateRegistration(req.body);
    console.log(errors, 'ERRORSSSSA')

    if (!isValid) {
        return res.status(400).json(errors)
    }

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
                            .then(user => res.status(200).json(user))
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({ message: 'Internal server error' });
                            });
                    });
                });
            }
        });
};

/**
 * @api {post} /users/login Login user
 *
 * @apiName Login User
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess success: true {String} User logged in with jwt
 *
 * @apiError (400) {String} message Validation error
 *
 * @apiError (404) {String} User Not Found
 */
exports.login = (req, res) => {
    const { errors, isValid } = helper.validateLogin(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: 'User not found' });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar
                        };
                        jwt.sign(payload, keys.secret, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            })
                        });
                    } else {
                        return res.status(400).json({ password: 'Validation Error: Password incorrect' });
                    }
                });
        });
};

/**
 * @api {get} /users/current returns User if is success
 *
 * @apiName Current User Info
 *
 * @apiSuccess success: true {String} User check confirmed, returns current user
 *
 * @apiError (400) {String} message Validation error
 *
 * @apiError (404) {String} User Not Found
 */
exports.current = (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
};
