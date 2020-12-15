var express = require('express');
var router = express.Router();
var MillPlan = require('../models/MillPlan')

const mongoose = require('mongoose');

/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
        const MillPlans = await MillPlan.find();
    
        res.status(200).json({
          data: { MillPlans }
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

        const MillPlans = await MillPlan.findById(req.params.id);
    
        res.status(200).json({
          data: { MillPlans }
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
        const newMillPlan = await MillPlan.create(req.body);
    
        res.status(201).json({
          data: { MillPlans: newMillPlan }
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
            const MillPlans = await MillPlan.findByIdAndUpdate(req.params.id, req.body, {
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
                await MillPlan.findByIdAndDelete(req.params.id);
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