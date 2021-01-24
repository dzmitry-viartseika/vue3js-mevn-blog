const express = require('express');
const EmailsController = require('../controllers/emails-controller');
const emails_controller = new EmailsController();
const router = new express.Router();

router.post('/newArticle', emails_controller.newEmail);
router.get('/getArticles', emails_controller.getAllArticles);

module.exports = router;
