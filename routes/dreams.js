var express = require('express');
var router = express.Router();
var Dream = require('../models/Dream');

/* GET home page. */

router.get('/', async function (req, res, next) {
    try {
        const dreams = await Dream.find();
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
router.get('/:id', async function(req, res, next) {
    try {
        const Dreams = await Dream.findById(req.params.id);
        res.status(200).json({
          data: { Dreams }
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
        const newDream = await Dream.create(req.body);
        res.status(201).json({
          data: { Dreams: newDream }
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
            const Dreams = await Dream.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
            });
            res.status(200).json({
              data: { Dreams }
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
                await Dream.findByIdAndDelete(req.params.id);
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

