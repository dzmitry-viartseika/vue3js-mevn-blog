const express = require('express');
const ArticlesController = require('../controllers/articles-controller');
const articles_controller = new ArticlesController();
const router = new express.Router();

router.post('/newArticle', articles_controller.newArticle);
router.get('/getArticles', articles_controller.getAllArticles);
router.delete('/deleteArticle', articles_controller.deleteArticle);

module.exports = router;
