// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство - символ Symbol.iterator.Каждый альбом имеет следующую структуру:

// {
//     title: "Название альбома",
//     artist: "Исполнитель",
//     year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection.Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель(Год выпуска)
const albums = [
    { title: "альбом 1", artist: "Исполнитель 1", year: "2010" },
    { title: "альбом 2", artist: "Исполнитель 2", year: "2020" },
    { title: "альбом 3", artist: "Исполнитель 3", year: "2000" }
];

const musicCollection = {
    albums: [...albums],
    [Symbol.iterator]: function() {
        let index = 0;
        return {
            next: () => {
                if (index < this.albums.length) {
                    return { value: this.albums[index++], done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
}

for (const music of musicCollection) {
    console.log(music.title, music.artist, music.year);
}
// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах.Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента.В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
//     Ольга - специализация: Суши.
//         Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

//                         Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.
const cookers = new Map();
cookers.set("Пицца", "Виктор");
cookers.set("Суши", "Ольга");
cookers.set("Десерты", "Дмитрий");

const alex = {name: "Алексей"};
const alexOrder = new Set();
alexOrder.add("Пицца 'Пепперони'");
alexOrder.add("Тирамису");

const maria = { name: "Мария" };
const mariaOrder = new Set();
mariaOrder.add("Суши 'Калифорния'");
mariaOrder.add("Пицца 'Маргарита'");

const irina = { name: "Ирина" };
const irinaOrder = new Set();
irinaOrder.add("Чизкейк");

const clients = new Map();
clients.set(alex, alexOrder)
        .set(maria, mariaOrder)
        .set(irina, irinaOrder);

console.log(`Пицца "Маргарита" - повар: ${cookers.get("Пицца")}.`);
console.log(`Пицца "Пепперони" - повар: ${cookers.get("Пицца")}.`);
console.log(`Суши "Филадельфия" - повар: ${cookers.get("Суши")}.`);
console.log(`Суши "Калифорния" - повар: ${cookers.get("Суши")}.`);
console.log(`Тирамису - повар: ${cookers.get("Десерты")}.`);
console.log(`Чизкейк - повар: ${cookers.get("Десерты")}.`);

console.log(`Клиент ${alex.name} заказал: ${[...clients.get(alex)]}.`);
console.log(`Клиент ${maria.name} заказала: ${[...clients.get(maria)]}.`);
console.log(`Клиент ${irina.name} заказала: ${[...clients.get(irina)]}.`);
// console.log(clients.entries());
clients.forEach((value, key, map) => {
    let str = `Клиент ${key.name} заказал(а): `;
    // console.log(`${key.name}: ${value}`);
    for (let food of value) {
        // console.log(food);
        str += food + ", ";
    }
    console.log(str);
})