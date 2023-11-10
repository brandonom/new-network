const router = require('express').Router();
const {User, Post} = require('../models');
const withAuth =  require('../utils/auth')

router.get('/', async (req, res) => {
    const posts = await Post.findAll({
        include: [User]
    });

    res.render('landingpage', {
        logged_in: req.session.logged_in,
        posts: posts.map(c => c.get({ plain: true}))
    });
});

router.get('/register',  (req, res) => {
    res.render('registerform' );


});

router.get('/login', (req, res) => {
    res.render('loginform');

});

router.get('/post',  (req, res) =>{
    res.render('postform', {
        logged_in: req.session.logged_in,
    });

});

module.exports = router;
