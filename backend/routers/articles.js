const express = require('express');
const ArticlesController = require('../controllers/articles-controller');
const articles_controller = new ArticlesController();
const router = new express.Router();

router.post('/newArticle', articles_controller.newEmail);
router.get('/getArticles', articles_controller.getAllArticles);

module.exports = router;
