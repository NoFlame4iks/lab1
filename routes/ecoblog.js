const express = require('express');
const router = express.Router();
const EcoBlogController = require('../controllers/EcoBlogController');

// Головна сторінка
router.get('/', EcoBlogController.getAll);

// Сторінка деталі
router.get('/item/:id', EcoBlogController.getItem);

// Сторінка Privacy Policy
router.get('/privacy', EcoBlogController.privacyPolicy);

// Сторінка "Про розробника"
router.get('/about', EcoBlogController.about);

module.exports = router;