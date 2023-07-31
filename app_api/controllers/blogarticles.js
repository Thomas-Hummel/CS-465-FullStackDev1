const mongoose = require('mongoose');
const Model = mongoose.model('blogarticles');

// GET: /blogarticles - returns all of the blog articles
const blogarticlesList = async (req, res) => {
    Model
        .find({})
        .then((blogarticles) => {
            if (!blogarticles || Object.keys(blogarticles).length === 0) {
                return res
                    .status(404)
                    .json({ "message": "blogarticles not found" });
            } else {
                return res
                    .status(200)
                    .json(blogarticles);
            }
        })
        .catch((err) => {
            return res
                .status(404)
                .json(err);
        });
};

module.exports = {
    blogarticlesList
};