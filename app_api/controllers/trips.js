const mongoose = require('mongoose');
const model = mongoose.model('trips');

// GET: /trips - lists all of the trips
const tripsList = async (req, res) => {
    model
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
    model
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

// POST: /trips - adds a trip based on trip data in the body
const tripsAddTrip = async (req, res) => {
    model
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        })
        .then((trip) => {
            return res
                .status(201)        // Created
                .json(trip);
        })
        .catch((err) => {
            if (err) {
                return res
                    .status(400)    // Bad request, invalid content
                    .json(err);
            }
        });
}

// PUT: /trips - updates a trip based on trip data in the body and the trip code in the URL
const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    model
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code "
                            + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code "
                            + req.params.tripCode
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};