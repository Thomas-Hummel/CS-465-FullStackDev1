/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', selected: { travel: true } });
};

module.exports = {
    travel
};
