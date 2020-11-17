const express = require('express');

const router = express.Router();
const passport = require('passport');
// eslint-disable-next-line no-unused-vars
const passportConfig = require('../passport');
const allReceipeController = require('../controllers/allReceipeController');

// All Receipes Route
router.post('/all-receipes', passport.authenticate('jwt', { session: false }), allReceipeController.postToAllReceipes);
router.get('/all-receipes', passport.authenticate('jwt', { session: false }), allReceipeController.getAllReceipes);

module.exports = router;
