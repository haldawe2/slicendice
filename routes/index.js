const express = require('express');
const router = express.Router();
Transaction = require("../models/transaction")

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const transactionsFromDB = await Transaction.find({});
    res.status(200).render('index', {transactionsFromDB});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
