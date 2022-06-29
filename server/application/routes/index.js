const express = require('express');
const router = express.Router();
const UserRoutes = require('./users/users');
UserRoutes(router);
module.exports = router;