/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', selected: { news: true } });
};

module.exports = {
    news
};
