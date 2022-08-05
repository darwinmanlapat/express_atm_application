const router = require('express').Router();
const usersData = require('../users.json');
let error;

// SHOW Landing Page
router.route('/').get((req, res) => {
    res.render('landing/login', {error});
    error = undefined;
});

// POST login
router.route('/').post((req, res) => {
    const users = usersData['users'];
    const { username, password } = req.body;
    if (username == '' || password == '') {
        error = 'Username & Password are required';
        res.redirect('/');
    } else {
        const user = users.find(u => {
            if (u.username == username) {
                if(u.password == password) {
                    return u;
                }
            }
            return null;
        });
        if (user) {
            console.log(user);
            res.redirect(`/dashboard/${user.uuid}`);
        } else {
            error = 'Username or Password are incorrect';
            res.redirect('/');
        }
    }
   
});

module.exports = router;