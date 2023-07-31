const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true, index: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
mongoose.model('trips', tripSchema);

// Define the ad schema
const adSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    description: { type: String, required: true }
});
mongoose.model('ads', adSchema);

// Define the blog article schema
const blogArticleSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    publishDate: { type: Date, required: true, index: true },
    articleText: { type: String, required: true }
});
mongoose.model('blogarticles', blogArticleSchema);

// Define the menu item schema
const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
mongoose.model('menuitems', menuItemSchema);

// Define the news item schema
const newsItemSchema = new mongoose.Schema({
    section: { type: String, required: true, index: true },
    items: [{ type: String, required: true }]
});
mongoose.model('newsitems', newsItemSchema);

// Define the news highlight schema
const newsHighlightSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    image: { type: String, required: true },
    publishDate: { type: Date, required: true, index: true },
    author: { type: String, required: true },
    articleText: { type: String, required: true }
});
mongoose.model('newshighlights', newsHighlightSchema);

// Define the room schema
const roomSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    rate: { type: Number, required: true }
});
mongoose.model('rooms', roomSchema);

module.exports = { tripSchema, adSchema, blogArticleSchema, menuItemSchema, newsItemSchema, newsHighlightSchema, roomSchema }
