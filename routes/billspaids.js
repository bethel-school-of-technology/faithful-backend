var express = require('express');
var router = express.Router();
var BillsPaids = require('../models/BillsPaid');

/* GET home page. */

router.get('/', async function (req, res, next) {
    try {
        const billspaids = await BillsPaids.find();

        res.status(200).json({
            data: { billspaids }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
});

router.get('/:id', async function (req, res, next) {
    try {
      
        const billspaid = await BillsPaid.findById(req.params.id);
    
        res.status(200).json({
          data: { billspaid }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
});


router.post('./add', async function(req, res){
  try {
    const newBillsPaid = await BillsPaid.create(req.body);

    res.status(201).json({
      data: { billspaid: newBillsPaid }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }

});




router.get('/update', async function (req, res) {
    try {
    const billspaid = await BillsPaid.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      res.status(200).json({
        status: 'success',
        data: { billspaid }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
});

router.get('/delete', async function (req, res, next) {
    try {
        await BillsPaid.findByIdAndDelete(req.params.id);
        res.status(204).json({
          status: 'success',
          data: null
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
});

router.get('/sums', async function (req, res) {
    try {
        const stats = await BillsPaid.aggregate([

          {
            $group: {
              _id: null,
              sumWeek1: { $sum: '$week1' },
              sumWeek2: { $sum: '$week2' },
              sumWeek3: { $sum: '$week3' },
              sumWeek4: { $sum: '$week4' }
            }
          }
        ]);
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
});

module.exports = router;