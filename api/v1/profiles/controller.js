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
        "githubprofile",
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