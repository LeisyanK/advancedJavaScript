// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вел данные уроки.
// 1. Map будет использоваться для хранения соответствия между уроком и преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.

// 1. Мар: урок => преподаватель
let lessons = new Map();
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

// 2. Мар: студент => Set уроков
let students = new Map();
const ivan = {name: "Иван"};
const ivanLessons = new Set();
ivanLessons.add(["Математика", "История"]); // массивы воспринимаются отдельными элементами в сетах, а не парсятся каждый элемент отдельно
students.set(ivan, ivanLessons);

const elena = {name: "Елена"};
const elenaLessons = new Set();
elenaLessons.add("Математика");
elenaLessons.add("История");
elenaLessons.add("География");
elenaLessons.add("Математика");
elenaLessons.add("Биология");
students.set(elena, elenaLessons);

// Проверка:
console.log(`Преподаватель по математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Ивана: ${[...students.get(ivan)]}`);   // Математика, История
console.log(`Уроки Елены: ${[...students.get(elena)]}`);   // Математика, История