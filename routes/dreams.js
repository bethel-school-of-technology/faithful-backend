var express = require('express');
var router = express.Router();
var Dreams = require('../models/Dream');

/* GET home page. */

router.get('/', async function (req, res, next) {
    try {
        const dreams = await Dreams.find();

        res.status(200).json({
            data: { dreams }
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
        const newDream = await Dream.create(req.body);
    
        res.status(201).json({
          data: { dream: newDream }
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