/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
const JWT = require('jsonwebtoken');
const User = require('../models/user');
const Receipe = require('../models/userReceipe');

const signToken = (userID) => JWT.sign({
  iss: 'Food_Core',
  sub: userID,
}, 'Food_Core', { expiresIn: '24h' });

function registerUser(req, res) {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) res.status(500).json({ message: { msgBody: 'error has occured', msgError: true } });
    if (user) res.status(400).json({ message: { msgBody: 'username is already used', msgError: true } });
    else {
      const newUser = new User({ username, password });
      newUser.save((err) => {
        if (err) res.status(500).json({ message: { msgBody: 'error has occured', msgError: true } });
        else res.status(201).json({ message: { msgBody: 'account successfully created', msgError: false } });
      });
    }
  });
}

function loginUser(req, res) {
  if (req.isAuthenticated()) {
    const { _id, username } = req.user;
    const token = signToken(_id);
    res.cookie('access_token', token, { httpOnly: true, sameSite: true });
    res.status(200).json({ isAuthenticated: true, user: { username } });
  }
}

function logoutUser(_req, res) {
  res.clearCookie('access_token');
  res.json({ user: { username: '' }, success: true });
}

function addUsersReceipe(req, res) {
  const receipe = new Receipe(req.body);
  receipe.save((err) => {
    if (err) res.status(500).json({ message: { msgBody: 'error has occured', msgError: true } });
    else {
      req.user.receipes.push(receipe);
      req.user.save((err) => {
        if (err) res.status(500).json({ message: { msgBody: 'error has occured', msgError: true } });
        else res.status(200).json({ message: { msgBody: 'successfully created receipe', msgError: false } });
      });
    }
  });
}

function getUsersReceipe(req, res) {
  User.findById({ _id: req.user._id }).populate('receipes').exec((err, document) => {
    if (err) res.status(500).json({ message: { msgBody: 'error has occured', msgError: true } });
    else res.status(200).json({ receipes: document.receipes, authenticated: true });
  });
}

function authenticateUser(req, res) {
  const { username } = req.user;
  res.status(200).json({ isAuthenticated: true, user: { username } });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUsersReceipe,
  addUsersReceipe,
  authenticateUser,
};
