/* Get the ad information from a JSON data file */
var fs = require('fs');
var ads = JSON.parse(fs.readFileSync('./data/ads.json', 'utf8'));

/* GET about view */
const about = (req, res) => {
    res.render('about', { title: 'Travlr Getaways', selected: { about: true }, ads });
};

module.exports = {
    about
};
