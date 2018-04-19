module.exports = app => {
    app.get('/', (req, res) => res.send('Hello'));
    // app.use('/api/v1/issues/:issueId/files', require('./api/v1/files'));
    // app.use('/api/v1/issues/:issueId/comments', require('./api/v1/comments'));
    // app.use('/api/v1/issues', require('./api/v1/issues'));
};