var express = require('express');
var router = express.Router();
var Attitude = require('../models/Attitude');

/* GET home page. */

router.get('/', async function (req, res, next) {
    try {
        const attitudes = await Attitude.find();

        res.status(200).json({
            data: { attitudes }
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

        const Attitudes = await Attitude.findById(req.params.id);
    
        res.status(200).json({
          data: { Attitudes }
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
        const newAttitude = await Attitude.create(req.body);
    
        res.status(201).json({
          data: { Attitudes: newAttitude }
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
            const Attitudes = await Attitude.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
            });
        
            res.status(200).json({
              data: { Attitudes }
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
                await Attitude.findByIdAndDelete(req.params.id);
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