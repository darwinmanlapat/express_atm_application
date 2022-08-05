const router = require('express').Router();
const usersData = require('../users.json');

// SHOW Landing Page
router.route('/:uuid').get((req, res) => {
    const users = usersData['users'];
    const uuid = req.params.uuid;
    const user = users.find(u => u.uuid === uuid);
    if (user) {
        res.render('dashboard/dashboard', {user});
    }
    res.redirect(302, '/');
});

module.exports = router