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

// Маршрути
app.use('/', ecoBlogRoutes); // Підключення маршруту для EcoBlog

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено: http://localhost:${PORT}`);
});