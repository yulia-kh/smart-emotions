const express = require('express');

const emoRouter = express.Router();
const bodyParser = express.json();

emoRouter
  .route('/')
  .post(bodyParser, (req, res, next) => {
    let { emotion, date } = req.body;
    res.json({response: emotion});
  });

module.exports = emoRouter;