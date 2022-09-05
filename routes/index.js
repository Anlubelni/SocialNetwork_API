// Requires an express router
const router = require('express').Router();

// Imports all of the API routes 
const apiRoutes = require('./api');

// Adds prefix of `/api` to all of the api routes
router.use('/api', apiRoutes);

// 404 Status Error Message
router.use((req, res) => {
    res.status(404).send('<h1>404 Error....</h1>');
  });

// Exports module router
module.exports = router;