const posts = [
    { id: 1, title: 'Сортування сміття', description: 'Розділяйте відходи на папір, пластик та органіку.' },
    { id: 2, title: 'Енергозбереження', description: 'Вимикайте світло та електроприлади, коли вони не потрібні.' },
    { id: 3, title: 'Скорочення пластику', description: 'Використовуйте багаторазові сумки та пляшки.' },
];

class EcoBlog {
    static getAll() {
        return posts;
    }

    static getById(id) {
        return posts.find(post => post.id === id);
    }
}

module.exports = EcoBlog;