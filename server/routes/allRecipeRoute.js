const express = require('express');

const router = express.Router();
const passport = require('passport');
// eslint-disable-next-line no-unused-vars
const passportConfig = require('../passport');
const allRecipeController = require('../controllers/allRecipeController');

// All Recipes Route
router.post('/all-recipes', passport.authenticate('jwt', { session: false }), allRecipeController.postToAllRecipes);
router.get('/all-recipes', passport.authenticate('jwt', { session: false }), allRecipeController.getAllRecipes);

module.exports = router;
