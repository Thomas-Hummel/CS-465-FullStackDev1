/* Get the trip information from a JSON data file */
var fs = require('fs');
var newsItems = JSON.parse(fs.readFileSync('./data/newsitems.json', 'utf8'));
var newsHighlights = JSON.parse(fs.readFileSync('./data/newshighlights.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', selected: { news: true }, newsItems, newsHighlights });
};

module.exports = {
    news
};
