/* GET home view */
const home = (req, res) => {
    res.render('home', { title: 'Travlr Getaways', selected: { home: true } });
};

module.exports = {
    home
};
