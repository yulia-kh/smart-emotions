const express = require('express');

const emoRouter = express.Router();
const bodyParser = express.json();

emoRouter
  .route('/')
  .post(bodyParser, (req, res, next) => {
    let { emotion, thoughts, date, } = req.body;
    res.json({response: emotion, thoughts});
  });

module.exports = emoRouter;