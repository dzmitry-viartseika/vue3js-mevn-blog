const Articles = require('../models/articlesList');
const mongoose = require('mongoose');
const Article = mongoose.model('Article');

class ArticlesController {
    constructor(){}
    getAllArticles = async (req, res) => {
        Article.find((err, docs) => {
            if (err) {
                res.send(err);
            } else {
                res.send(docs);
            }
        })
    };
    newEmail = async (req, res) => {
        const item = new Article()
            item.title = req.body.form.title,
            item.content = req.body.form.content,
            item.tags = req.body.form.tags,
        item.save()
        res.send(item);
    };
}

module.exports = ArticlesController;
