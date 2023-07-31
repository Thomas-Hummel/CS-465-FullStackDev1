const mongoose = require('mongoose');
const Model = mongoose.model('trips');

// GET: /trips - lists all of the trips
const tripsList = async (req, res) => {
    Model
        .find({})
        .then((trips) => {
            if (!trips || Object.keys(trips).length === 0) {
                return res
                    .status(404)
                    .json({ "message": "trips not found" });
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        })
        .catch((err) => {
            return res
                .status(404)
                .json(err);
        });
};

// GET: /trips/:tripCode - returns a single trip by code
const tripsFindByCode = async (req, res) => {
    Model
        .find({ 'code': req.params.tripCode })
        .then((trips) => {
            if (!trips || Object.keys(trips).length === 0) {
                return res
                    .status(404)
                    .json({ "message": "trip not found" });
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        })
        .catch((err) => {
            return res
                .status(404)
                .json(err);
        });
};

module.exports = {
    tripsList,
    tripsFindByCode
};