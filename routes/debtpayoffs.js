var express = require('express');
var router = express.Router();
var DebtPayoff = require('../models/DebtPayoff');

/* GET home page. */

router.get('/', async function (req, res, next) {
    try {
        const debtpayoffs = await DebtPayoff.find();

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


router.get('/:id', async function(req, res, next) {
    try { 

        const DebtPayoffs = await DebtPayoff.findById(req.params.id);
    
        res.status(200).json({
          data: { DebtPayoffs }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }    
});

router.post('/add', async function(req, res, next) {
    try {
        const newDebtPayoff = await DebtPayoff.create(req.body);
    
        res.status(201).json({
          data: { DebtPayoffs: newDebtPayoff }
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail',
          message: err
        });
    };
    });
    
    router.put('/update/:id', async function(req, res) {
        try {
            const DebtPayoffs = await DebtPayoff.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
            });
        
            res.status(200).json({
              data: { MillPlans }
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
                await DebtPayoff.findByIdAndDelete(req.params.id);
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