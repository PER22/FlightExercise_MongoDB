const express = require('express');

const router = express.Router();
const destinationsController = require("../controllers/destinationsController");
router.post('/flights/:flight_id/destinations', destinationsController.create);

module.exports = router;