/* Get the blog article information from a JSON data file */
var fs = require('fs');
var blogArticles = JSON.parse(fs.readFileSync('./data/blog_articles.json', 'utf8'));

/* GET home view */
const home = (req, res) => {
    res.render('home', { title: 'Travlr Getaways', selected: { home: true }, blogArticles });
};

module.exports = {
    home
};
