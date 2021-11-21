const router = require('express').Router();
const {
    Group,
    User,
    Character,
    UserGroup,
    UserGroupCharacter,
} = require('../../models/index');

router.post('/users', async (req, res) => {
    try {

        const dbUserData = await User.create({
            user_name: req.body.username,
            password: req.body.password,
        });
  
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUserData).render('character');
        });
    } 
    catch (err) {

        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;