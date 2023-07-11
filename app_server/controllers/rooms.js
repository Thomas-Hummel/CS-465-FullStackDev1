/* Get the trip information from a JSON data file */
var fs = require('fs');
var accomodations = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', selected: { rooms: true }, accomodations });
};

module.exports = {
    rooms
};
