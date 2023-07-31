const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const renderAbout = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - About';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No ads exist in our database!';
        }
    }
    res.render('about',
        {
            title: pageTitle,
            ads: responseBody,
            message
        }
    );
}

/* GET about view */
const aboutView = (req, res) => {
    const adsPath = '/api/ads';
    const requestOptions = {
        url: `${apiOptions.server}${adsPath}`,
        method: 'GET',
        json: {}
    };
    console.info('>> aboutController.aboutView calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderAbout(req, res, body);
        }
    );
};

module.exports = {
    aboutView
};
