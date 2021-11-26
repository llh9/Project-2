const router = require('express').Router();
const User = require('../models/User');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/', async (req, res) => {
  try {
    res.render('login');
  }
  catch (error) {
    if (error) throw error;
  }
  
});

router.get('/campaign', async (req, res) => {
  try {
    res.render('campaign');
  }
  catch (error) {
    if (error) throw error;
  }
  
});

router.get('/character', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
});



module.exports = router;