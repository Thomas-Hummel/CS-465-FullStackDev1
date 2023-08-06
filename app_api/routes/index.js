const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');
const adsController = require('../controllers/ads');

// Trips
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

// Ads
router
    .route('/ads')
    .get(adsController.adsList);

module.exports = router;