const chef = new Map();
chef.set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты");

console.log(`Виктор - специализация: ${ chef.get("Виктор") }`);
console.log(`Ольга - специализация: ${ chef.get("Ольга") }`);
console.log(`Дмитрий - специализация: ${ chef.get("Дмитрий") }`);
console.log();

// Блюда и их повара:

let menu = new Map();
menu.set("Пицца 'Маргарита'", "Виктор")
    .set("Пицца 'Пепперони'", "Виктор")
    .set("Суши 'Филадельфия'", "Ольга")
    .set("Суши 'Калифорния'", "Ольга")
    .set("Тирамису", "Дмитрий")
    .set("Чизкейк", "Дмитрий");

console.log(`Пиццу 'Маргарита' приготовил повар: ${ menu.get("Пицца 'Маргарита'") }`);
console.log(`Суши 'Калифорния' приготовил повар: ${ menu.get("Суши 'Калифорния'") }`);
console.log(`Чизкейк приготовил повар: ${ menu.get("Чизкейк") }`);
console.log();

let orders = new Map(); //заказы всех клиентов

//заказ первого клиента
let client1 = { name: 'Алексей' };
let clientOrder1 = new Set();
clientOrder1.add("Пицца 'Пепперони'")
    .add("Тирамису");

//заказ второго клиента
let client2 = { name: 'Мария' };
let clientOrder2 = new Set();
clientOrder2.add("Суши 'Калифорния'")
    .add("Пицца 'Маргарита'");

//заказ третьего клиента
let client3 = { name: 'Ирина' };
let clientOrder3 = new Set();
clientOrder3.add("Чизкейк");

orders.set(client1, clientOrder1) // добавляем заказы клиентов в список
    .set(client2, clientOrder2)
    .set(client3, clientOrder3)

console.log(`Клиент ${ client1.name } заказал(а): ${ [...orders.get(client1)] }`);
console.log(`Клиент ${ client2.name } заказал(а): ${ [...orders.get(client2)] }`);
console.log(`Клиент ${ client3.name } заказал(а): ${ [...orders.get(client3)] }`);