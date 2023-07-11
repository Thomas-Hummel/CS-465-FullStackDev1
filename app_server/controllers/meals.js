/* Get the trip information from a JSON data file */
var fs = require('fs');
var menuItems = JSON.parse(fs.readFileSync('./data/menu_items.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways', selected: { meals: true }, menuItems });
};

module.exports = {
    meals
};
