class EcoBlog {
    static items = [
        { id: 1, title: 'Зменшення використання пластику', description: 'Використовуйте багаторазові сумки.' },
        { id: 2, title: 'Економія води', description: 'Закривайте кран, коли чистите зуби.' },
    ];

    static getAll() {
        return this.items;
    }

    static getById(id) {
        return this.items.find(item => item.id === id);
    }

    static add({ title, description }) {
        const newItem = {
            id: this.items.length + 1,
            title,
            description,
        };
        this.items.push(newItem);
    }
}

module.exports = EcoBlog;