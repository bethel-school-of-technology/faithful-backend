var express = require('express');
var router = express.Router();
var BillsPaid = require('../models/BillsPaid');

/* GET home page. */

router.get('/', async function (req, res, next) {
  try {
    const billspaids = await BillsPaid.find();

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




router.post('/add', async function(req, res) {
  try {
      const newBillsPaid = await BillsPaid.create(req.body);
  
      res.status(201).json({
        data: { BillsPaids: newBillsPaid }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
  };
  });

 

  router.get('/sums', async function (req, res) {
    try {
      const stats = await BillsPaid.aggregate([
       
        {
          $group: {
            _id: null,
            sumweek1: { $sum: '$week1' }
    /*       sumweek2: { $sum: '$week2' },
            sumweek3: { $sum: '$week3' },
            sumweek4: { $sum: '$week4' },
          
            numWeek1: { $sum: '$week1' } */
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

  router.get('/:id', async function(req, res) {
    try {
  
        const BillsPaids = await BillsPaid.findById(req.params.id);
    
        res.status(200).json({
          data: { BillsPaids }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }    
  });
  
  router.put('/update/:id', async function(req, res) {
      try {
          const BillsPaids = await BillsPaid.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
          });
      
          res.status(200).json({
            data: { BillsPaids }
          });
        } catch (err) {
          res.status(500).json({
            status: 'fail',
            message: err
          });
        }
      });
  
      router.delete('/delete/:id', async function(req, res, next) {
          try {
              await BillsPaid.findByIdAndDelete(req.params.id);
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