// Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы, рейтинги, теги.
// 2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на консоль.

// создаем 3 уникальных символа для наших метаданных
const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

// Функция для добавления метаданных к объектам
// metadataType - это ключ, а data - значение этого ключа
// метаданные должны прописываться массивом, поэтому сначала добавляем пустой массив, если нет такого значения
// т.е. по одному ключу могут быть несколько значений (массив)
// если пока нет значений по данному ключу, то создаем новый список
// если внутри объекта book нет метаданных по этому ключу, то создаем пустой массив
function addMetadata(book, metadataType, data) {
    if (!book[metadataType]) {
        book[metadataType] = [];
    }
    book[metadataType].push(data);
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
    return book[metadataType];
}

// Создание объекта книги и добавление метаданных
let book = {
    title: "1984",
    author: "George Orwell"
};

addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");

// Вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagsSymbol));