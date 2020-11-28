var express = require('express');
var router = express.Router();
var DebtPayoffs = require('../models/DebtPayoff');

/* GET home page. */

router.get('/', async function (req, res, next) {
    try {
        const debtpayoffs = await DebtPayoffs.find();

        res.status(200).json({
            data: { debtpayoffs }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
});


router.post('/add', async function (req, res) {
    try {
        const newDebtPayoff = await DebtPayoff.create(req.body);
    
        res.status(201).json({
          data: { debtpayoff: newDebtPayoff }
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail',
          message: err
        });
      }
});


/*
router.get('/id', function (req, res, next) {
    res.json('MillPlansId');
});

router.get('/update', function (req, res, next) {
    res.json('MillPlansUpdate');
});

router.get('/delete', function (req, res, next) {
    res.json('MillPlansDelete');
});
*/
module.exports = router;