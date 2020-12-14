var express = require('express');
var router = express.Router();
var cors = require('cors');
var Cash = require('../models/CashFlow');

/* GET home page. */

router.get('/', async function (req, res, next) {
    try {
        const incomes = await Cash.find();
        res.status(200).json({
            data: { incomes }
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
        const viewIncome = await Cash.findById(req.params.id);
        res.status(200).json({
          data: { viewIncome }
        });
      } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
});
router.options('/add', cors());
router.options('/', cors());
router.post('/add', async function(req, res, next) {
    try {
        const newIncome = await Cash.create(req.body);
        res.status(201).json({
          data: { incomes: newIncome }
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
            const income = await Cash.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
            });
            res.status(200).json({
              data: { income }
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
                await Cash.findByIdAndDelete(req.params.id);
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
