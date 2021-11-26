const router = require('express').Router();
const User = require('../models/User');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/login', (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/campaign');
      return;
    }else{
      res.render('login');
    }
  }
  catch (error) {
    if (error) throw error;
  }
});

router.get('/', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/campaign');
      return;
    }else{
      res.render('login');
    }
  }
  catch (error) {
    if (error) throw error;
  }
  
});

router.get('/campaign', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/campaign');
      return;
    }else{
      res.render('login');
    }
  }
  catch (error) {
    if (error) throw error;
  }
});

router.get('/character', (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/character');
      return;
    }
    res.render('login');
  }
  catch (error) {
    if (error) throw error;
  }
});

router.get('/group', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/group');
    return;
  }
  res.render('login');
});

router.get('/create-character', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/create-character');
    return;
  }
  res.render('login');
});




module.exports = router;