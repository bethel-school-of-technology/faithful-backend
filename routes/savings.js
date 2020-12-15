var express = require('express');
var router = express.Router();
var Saving = require('../models/Saving');

/* GET home page. */

router.get('/', async function (req, res, next) {
    try {
        const savings = await Saving.find();

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


router.get('/:id', async function(req, res, next) {
    try { 

        const Savings = await Saving.findById(req.params.id);
    
        res.status(200).json({
          data: { Savings }
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
        const newSaving = await Saving.create(req.body);
    
        res.status(201).json({
          data: { Savings: newSaving }
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
            const Savings = await Saving.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
            });
        
            res.status(200).json({
              data: { Savings }
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
                await Saving.findByIdAndDelete(req.params.id);
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