const Articles = require('../models/articlesList');
const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const ObjectId = require('mongodb').ObjectID;

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
    newArticle = async (req, res) => {
        const item = new Article()
            item.title = req.body.form.title,
            item.content = req.body.form.content,
            item.tags = req.body.form.tags,
        item.save()
        res.send(item);
    };
    deleteArticle = async (req, res) => {
        const id = req.query.id;
        const o_id = new ObjectId(id);
        Article.deleteOne({ _id: o_id }, function(err, result) {
            if (err) {
                res.send('err');
            } else {
                res.send('result');
            }
        });
    };
}

module.exports = ArticlesController;
