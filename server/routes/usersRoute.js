const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const usersController = require('../controllers/usersController');

//middleware
router.use(express.urlencoded({extended:true}))

//Users Route
router.post('/register', usersController.registerUser);

router.post('/login', passport.authenticate('local', {session: false}), usersController.loginUser);

router.get('/logout',passport.authenticate('jwt',{session : false}), usersController.logoutUser);

router.post('/receipes', passport.authenticate('jwt', {session: false}), usersController.addUsersReceipe);

router.get('/receipes', passport.authenticate('jwt', {session: false}), usersController.getUsersReceipe);

router.get('/authenticated', passport.authenticate('jwt', {session: false}), usersController.authenticateUser);    
 
module.exports = router;