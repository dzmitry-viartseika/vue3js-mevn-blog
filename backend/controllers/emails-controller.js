const Articles = require('../models/emailsList');
const mongoose = require('mongoose');
const Article = mongoose.model('Article');

class EmailsController {
    constructor(){}
    getAllArticles = async (req, res) => {
        Article.find((err, docs) => {
            console.log('docs', docs)
            if (err) {
                res.send(err);
            } else {
                res.send(docs);
            }
        })
    };
    newEmail = async (req, res) => {
        const item = new Article()
            item.title = req.body.title,
            item.content = req.body.content,
            item.tags = req.body.tags,
        item.save()
    };
}

module.exports = EmailsController;
