const User = require('../../../models/User');
const Profile = require('../../../models/Profile');
const helper = require('../../../helpers');

/**
 * @api {get} /profile
 *
 * @apiName GET Current Profile
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Returns User Profile
 *
 * @apiError (404) {String} message Not Found
 *
 * @apiError (500) {String} Internal Server error
 */

exports.find = (req, res) => {
    Profile.findOne({ user: req.user.id })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                return res.status(404).json('Not Found')
            }
            res.json(profile);
        })
        .catch(err => res.status(500).json(err));
};

/**
 * @api {post} /profile/create
 *
 * @apiName POST Create Profile
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Creates a Profile
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.create = (req, res) => {
    const { errors, isValid } = helper.validateProfile(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const profileFields = {};
    profileFields.user = req.user.id;

    const fields = [
        "handle",
        "company",
        "website",
        "location",
        "bio",
        "status",
        "githubusername",
        "youtube",
        "twitter",
        "facebook",
        "linkedin",
        "instagram"
    ];

    fields.forEach(field => {
        if (req.body[field]) profileFields[field] = req.body[field];
    });

    // Skills - Split into array
    if (typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
        if (profile) {
            // Update
            Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            ).then(profile => res.json(profile));
        } else {
            // Create

            // Check if handle exists
            Profile.findOne({ handle: profileFields.handle }).then(profile => {
                if (profile) {
                    errors.handle = 'That handle already exists';
                    res.status(400).json(errors);
                }

                // Save Profile
                new Profile(profileFields).save().then(profile => res.json(profile));
            });
        }
    });

};

/**
 * @api {post} /profile/addHistory
 *
 * @apiName POST Creates Profile History
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Creates a Profile History
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.addExperience = (req, res) => {
    const { errors, isValid } = helper.validateProfileExp(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            const newExp = {
                title: req.body.title,
                company: req.body.company,
                location: req.body.location,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            };

            profile.experience.unshift(newExp);
            profile
                .save()
                .then(profile => res.json(profile));
        });

};

/**
 * @api {post} /profile/addEducation
 *
 * @apiName POST Creates Profile Education
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Creates a Profile Education
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.addEducation = (req, res) => {
    const { errors, isValid } = helper.validateProfileEdu(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            const newEdu = {
                school: req.body.school,
                degree: req.body.degree,
                fieldofstudy: req.body.fieldofstudy,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            };

            profile.education.unshift(newEdu);
            profile
                .save()
                .then(profile => res.json(profile));
        });

};

/**
 * @api {delete} /profile/experience/:id
 *
 * @apiName DELETE Removes Profile Experience by id
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Removes Experience
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.removeExperience = (req, res) => {
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            const removeIndex = profile.experience
                .map(item => item.id)
                .indexOf(req.params.id);

            if (removeIndex === -1) {
                return res.status(404).json({
                    error: 'There is no history with this ID',
                });
            }

            // as we already returned above with an error, we can use splice now
            profile.experience.splice(removeIndex, 1);

            // Update new state
            profile
                .save()
                .then(profile => res.json(profile))
                .catch(err => res.status(500).json(err));
        });

};

/**
 * @api {delete} /profile/education/:id
 *
 * @apiName DELETE Removes Profile Education by id
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Removes Education
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.removeEducation = (req, res) => {
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            const removeIndex = profile.education
                .map(item => item.id)
                .indexOf(req.params.id);

            if (removeIndex === -1) {
                return res.status(404).json({
                    error: 'There is no education with this ID',
                });
            }

            // as we already returned above with an error, we can use splice now
            profile.education.splice(removeIndex, 1);

            // Update new state
            profile
                .save()
                .then(profile => res.json(profile))
                .catch(err => res.status(500).json(err));
        });

};

/**
 * @api {delete} /profile
 *
 * @apiName DELETE Removes Profile
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Removes profile and User
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.remove = (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id })
        .then(() => {
            User.findOneAndRemove({ _id: req.user.id })
                .then(() => res.json({ success: true }))
        });
};

/**
 * @api {get} /profile/list
 *
 * @apiName GET List of profiles
 *
 * @access Public
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Fetching Profiles List
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.list = (req, res) => {
    Profile.find()
        .populate('user', ['name', 'avatar'])
        .then(profiles => {
            if (!profiles) {
                return res.status(404).json('There are no profiles')
            }

            res.json(profiles);
        })
        .catch(err => res.status(500).json(err));
};

/**
 * @api {get} /profile/handle/:handle
 *
 * @apiName GET Profile Handle
 *
 * @access Public
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Fetching Profile Handle
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.findHandle = (req, res) => {
    Profile.findOne({ handle: req.params.handle })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                return res.status(404).json('Not Found')
            }

            res.json(profile);
        })
        .catch(err => res.status(500).json(err));
};

/**
 * @api {get} /profile/user/:user_id
 *
 * @apiName GET Profile User
 *
 * @access Public
 *
 * @apiHeader (RequestFileHeader) {String="application/json"} Content-Type
 *
 * @apiSuccess (200) {String} Fetching Profile User
 *
 * @apiError (400) {String} message Validation Error
 *
 * @apiError (500) {String} Internal Server error
 */

exports.findUser = (req, res) => {
    Profile.findOne({ user: req.params.user_id })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                return res.status(404).json('Not Found')
            }

            res.json(profile);
        })
        .catch(err => res.status(500).json(err));
};