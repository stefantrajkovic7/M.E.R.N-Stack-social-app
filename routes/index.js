module.exports = app => {

    /**
     * @UserApiRoutes
     */
    app.use('/api/v1/users', require('../api/v1/users'));

    /**
     * @ProfileApiRoutes
     */
    app.use('/api/v1/profiles', require('../api/v1/profiles'));

    /**
     * @PostApiRoutes
     */
    app.use('/api/v1/posts', require('../api/v1/posts'));
    
};