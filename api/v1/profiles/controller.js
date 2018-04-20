const User = require('../../../models/User');
const Profile = require('../../../models/Profile');

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
        .then(profile => {
            if (!profile) {
                return res.status(404).json('Not Found')
            }
            res.json(profile);
        })
        .catch(err => res.status(500).json(err));
};