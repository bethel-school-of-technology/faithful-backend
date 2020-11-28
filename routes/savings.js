var express = require('express');
var router = express.Router();
var Savings = require('../models/Saving');

/* GET home page. */

router.get('/', async function (req, res, next) {
    try {
        const savings = await Savings.find();

        res.status(200).json({
            data: { savings }
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
        const newSaving = await Saving.create(req.body);
    
        res.status(201).json({
          data: { saving: newSaving }
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