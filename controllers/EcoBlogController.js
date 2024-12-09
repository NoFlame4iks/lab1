const EcoBlog = require('../models/EcoBlog');

class EcoBlogController {
    // Головна сторінка
    static getAll(req, res) {
        const items = EcoBlog.getAll();
        res.render('index', { items, title: 'Головна - Екоблог' });
    }

    // Сторінка деталі поради
    static getItem(req, res) {
        const item = EcoBlog.getById(Number(req.params.id));
        if (!item) {
            return res.status(404).send('Запис не знайдено');
        }
        res.render('item', { item, title: item.title });
    }

    // Сторінка політики конфіденційності
    static privacyPolicy(req, res) {
        res.render('privacy', { title: 'Політика конфіденційності' });
    }

    // Сторінка "Про розробника"
    static about(req, res) {
        res.render('about', { title: 'Про розробника', githubLink: 'https://github.com/NoFlame4iks' });
    }

    // Сторінка додавання нової поради
    static addItemForm(req, res) {
        res.render('add', { title: 'Додати пораду' });
    }

    // Обробка додавання нової поради
    static createItem(req, res) {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).send('Назва та опис обов’язкові');
        }
        EcoBlog.add({ title, description });
        res.redirect('/');
    }
}

module.exports = EcoBlogController;