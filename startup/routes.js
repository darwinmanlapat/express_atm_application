const express = require('express');
const DashboardRouter = require('../routes/DashboardRouter');
const DepositRouter = require('../routes/DepositRouter');
const LoginRouter = require('../routes/LoginRouter');
const RegistrationRouter = require('../routes/RegistrationRouter');
const WithdrawRouter = require('../routes/WithdrawRouter');
const methodOverride = require('method-override');

module.exports = function(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(methodOverride('_method'));

    app.use('/', LoginRouter);
    app.use('/registration', RegistrationRouter);
    app.use('/dashboard', DashboardRouter);
    app.use('/deposit', DepositRouter);
    app.use('/withdrawal', WithdrawRouter);
}