const router = require('express').Router();
const usersData = require('../users.json');
let error;
// SHOW Landing Page
router.route('/:uuid').get((req, res) => {
    const users = usersData['users'];
    const uuid = req.params.uuid;
    const user = users.find(u => u.uuid === uuid);
    res.render('dashboard/deposit', {user});
    error = undefined;
});

router.route('/:uuid').patch((req, res) => {
    const users = usersData['users'];
    const uuid = req.params.uuid;
    const { deposit } = req.body;
    const depositAmount = parseInt(deposit);
    const user = users.find(u => u.uuid === uuid);
    if (depositAmount <= 0) {
        error = 'Invalid Amount';
        res.render('dashboard/deposit', {user, error})
    } else {
        user.balance += parseInt(deposit);
        res.redirect(302, `/dashboard/${uuid}`);
    }
   
});

module.exports = router