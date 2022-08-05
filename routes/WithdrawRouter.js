const router = require('express').Router();
const usersData = require('../users.json');
let error;
// SHOW Landing Page
router.route('/:uuid').get((req, res) => {
    const users = usersData['users'];
    const uuid = req.params.uuid;
    const user = users.find(u => u.uuid === uuid);
    res.render('dashboard/withdrawal', {user});
    error = undefined;
});

router.route('/:uuid').patch((req, res) => {
    const users = usersData['users'];
    const uuid = req.params.uuid;
    const { withdrawal } = req.body;
    const withdrawalAmount = parseInt(withdrawal)
    const user = users.find(u => u.uuid === uuid);
    if (withdrawalAmount <= 0) {
        error = 'Invalid Amount';
        res.render('dashboard/withdrawal', {user, error})
    } else if (withdrawalAmount > user.balance) {
        error = 'Insufficient Balance';
        res.render('dashboard/withdrawal', {user, error})
    } else {
        user.balance -= parseInt(withdrawalAmount);
        res.redirect(302, `/dashboard/${uuid}`);
    }
});

module.exports = router