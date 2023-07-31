const mongoose = require('mongoose');
const Model = mongoose.model('ads');

// GET: /ads - returns all of the ads
const adsList = async (req, res) => {
    Model
        .find({})
        .then((ads) => {
            if (!ads || Object.keys(ads).length === 0) {
                return res
                    .status(404)
                    .json({ "message": "ads not found" });
            } else {
                return res
                    .status(200)
                    .json(ads);
            }
        })
        .catch((err) => {
            return res
                .status(404)
                .json(err);
        });
};

module.exports = {
    adsList
};