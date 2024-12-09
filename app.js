const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const ecoBlogRoutes = require('./routes/ecoblog'); // Підключення правильного маршруту

const app = express();

// Підключення Body Parser для роботи з формами
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Налаштування EJS і макетів
app.set('view engine', 'ejs');
app.use(expressLayouts); // Увімкнення макетів
app.set('layout', 'layouts/layout'); // Встановлення основного макета

// Масив для зберігання порад
let items = [
    { id: 1, title: "Використовуйте багаторазові сумки", description: "Відмовтеся від пластикових пакетів." },
    { id: 2, title: "Зменшіть використання енергії", description: "Вимикайте світло, коли воно не потрібне." }
];

// Головна сторінка
app.get('/', (req, res) => {
    res.render('index', { items });
});

// Обробка форми додавання нової поради
app.post('/add-tip', (req, res) => {
    const { title, description } = req.body;
    if (title && description) {
        items.push({ id: items.length + 1, title, description });
    }
    res.redirect('/');
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено: http://localhost:${PORT}`);
});