const passport = require('passport');

export const isAuth = passport.authenticate('jwt', { session: false });