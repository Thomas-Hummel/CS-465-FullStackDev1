const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');
const ctrlAds = require('../controllers/ads');

// Trips
router
    .route('/trips')
    .get(ctrlTrips.tripsList);
router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode);

// Ads
router
    .route('/ads')
    .get(ctrlAds.adsList);

module.exports = router;