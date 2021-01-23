const mongoose = require('mongoose');

const userArticle = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    tags: {
        type: Array
    }
});

const Article = mongoose.model('Article', userArticle)
module.exports = Article
