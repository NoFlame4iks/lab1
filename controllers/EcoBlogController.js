const EcoBlog = require('../models/EcoBlog');

class EcoBlogController {
    static getAll(req, res) {
        const items = EcoBlog.getAll();
        res.render('index', { items, title: 'Головна - Екоблог' });
    }

    static getItem(req, res) {
        const item = EcoBlog.getById(Number(req.params.id));
        if (!item) {
            return res.status(404).send('Запис не знайдено');
        }
        res.render('item', { item, title: item.title });
    }

    static privacyPolicy(req, res) {
        res.render('privacy', { title: 'Політика конфіденційності' });
    }

    static about(req, res) {
        res.render('about', { title: 'Про розробника', githubLink: 'https://github.com/Vladyslav-Doroshenko' });
    }
}

module.exports = EcoBlogController;