var express = require('express');
var router = express.Router();
var SowReap = require('../models/SowReap');

/* GET home page. */

router.get('/', async function (req, res, next) {
    try {
        const sowreaps = await SowReap.find();

        res.status(200).json({
            data: { sowreaps }
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

        const SowReaps = await SowReap.findById(req.params.id);
    
        res.status(200).json({
          data: { SowReaps }
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
        const newSowReap = await SowReap.create(req.body);
    
        res.status(201).json({
          data: { SowReaps: newSowReap }
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
            const SowReaps = await SowReap.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
            });
        
            res.status(200).json({
              data: { SowReaps }
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
                await SowReap.findByIdAndDelete(req.params.id);
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