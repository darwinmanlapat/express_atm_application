const router = require('express').Router();
const usersData = require('../users.json');
const { v4: uuidv4 } = require('uuid');
let error;

// SHOW Registration Page
router.route('/').get((req, res) => {
    res.render('registration/registration', {error});
    error = undefined;
});

// POST Registration
router.route('/').post((req, res) => {
    const users = usersData['users'];
    const { firstName, lastName, username, password } = req.body;
    const uuid = uuidv4();
    if (firstName == '' || lastName == '' || username == '' || password == '') {
        error = 'All fields are required';
        res.redirect('/registration');
    } else {
        users.push({uuid, firstName, lastName, username, password, balance: 0});
        res.redirect(302, '/');
    }
});

module.exports = router;