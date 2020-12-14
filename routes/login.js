var express = require('express');
var router = express.Router();
var Login = require('../models/Login');
var LoginModel = require('../models/Login');
var cors = require('cors');



router.get('/', async function (req, res, next) {
    try {
        const users = await Login.find();
        res.status(200).json({
            data: { users }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
});
router.post('/signup', async function (req, res, next) {
    LoginModel.findOne({ 'email': req.body.email }, (err, user) =>{
        if (user) 
            res.json({ message: 'Account already exists with this email' })
        });

        try {
            const newUser = await Login.create(req.body);
            res.status(201).json({
                data: { users: newUser },
                message: "All signed up!",
                url: "../.."
            });
        } catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err
            });
        };
});
router.post('/signin', (req, res, next) => {
    LoginModel.findOne({ 'email': req.body.email }, (err, user) => {
        if (!user) 
            res.json({ 
                message: "Login failed, user not found",
                url: "/login/signin"
            })
        else {
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) 
                throw err;

            else if (!isMatch) 
                return res.status(400).json({
                    message: "Incorrect password"
                });


            res.status(200).json({
                message: "You are literally the best and most awesome!",
                url: "../.."
            })                    
        })}
    })
})
router.delete('/delete/:id', async function (req, res, next) {
    try {
        await Login.findByIdAndDelete(req.params.id);
        res.status(204).json({
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
});


module.exports = router;
