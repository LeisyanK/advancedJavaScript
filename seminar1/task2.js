// Задание 2.
// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойство-символ Symbol.iterator. (одно из полей - это итератор)
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их в консоль.
const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
];

// создали объект , состоящий из двух полей: первое - массив книг (объектов), второй - итератор
// функция в Symbol.iterator нужна, чтобы сделать библиотеку итерируемой. Ниже цикл for of сможет пробежаться по книгам библиотеки благодаря Symbol.iterator
const library = {
    books: [...books],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.books.length) {
                    return { value: this.books[index++], done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
};

// после того, как добавили итератор, можем пробежаться по элементам библиотеки
for (const book of library) {
    console.log(book.title, book.author);
}