module.exports = app => {
    app.get('/', (req, res) => res.send('Hello'));

    /**
     * @UserRoutes
     */
    app.use('/api/v1/users/register', require('../api/v1/users'));

};