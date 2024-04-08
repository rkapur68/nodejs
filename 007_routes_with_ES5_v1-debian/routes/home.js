const express = require('express');
const router = express.Router();


router.get('/', handleRequest);

module.exports = {
  homeRouter: router
}
