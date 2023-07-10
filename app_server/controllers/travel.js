/* Get the trip information from a JSON data file */
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', selected: { travel: true }, trips });
};

module.exports = {
    travel
};
