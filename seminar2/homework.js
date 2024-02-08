// Задание 1
// Представьте, что у вас есть класс для управления библиотекой.В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список.Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг(массив) в качестве аргумента.Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
class Library {
    #books = [];
    constructor (books) {
        const setBooks = new Set();
        setBooks.add([...books]);
        // console.log('Set: ' + [...setBooks]);
        // books.forEach(element => {
        //     setBooks.add(element);
        // });
        console.log('Set: ' + [...setBooks]);

        if (setBooks.size !== books.lenght) {
            throw new Error('Список книг содержит дубликаты');
        } else
        // this.#books = [...books];
        this.#books = books;
    }
    getAllBooks = function () {
        return this.#books;
    };
    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error(`Книга "${title}" уже есть`);
        }
        this.#books.push(title);
    }
    hasBook(title) {
        if (this.#books.indexOf(title) === -1) {
            return false;
        }
        return true;
    }
    removeBook(title) {
        const bookIndex = this.#books.indexOf(title);
        // if (this.hasBook(title)) {
        //     // this.#books
        //     console.log(`Удаляем "${title}"`);
        // }
        if (bookIndex === -1) {
            throw new Error(`Книги "${title}" нет в библиотеке`);
        }
        this.#books.splice(bookIndex, 1);
    }
}

const book1 = 'Робинзон Крузо';
const book2 = 'Остров сокровищ';
const book3 = 'Джейн Эйр';
const book4 = 'Остров сокровищ';
const book5 = 'Отцы и дети';
const newBooks = [];
newBooks.push(book1, book2, book3);
const newBooks2 = [];
newBooks2.push(book1, book2, book3, book4);
try {
    const lib = new Library(newBooks);
    console.log(lib.getAllBooks());
    // lib.addBook(book4);             // Ошибка: Книга "Остров сокровищ" уже есть
    console.log(lib.hasBook(book2));
    lib.removeBook(book2);
    console.log(lib.getAllBooks());

    const lib2 = new Library(newBooks2);
    console.log(lib2.getAllBooks());    // Ошибка: Список книг содержит дубликаты

} catch (error) {
    console.error('Ошибка: ' + error.message);
}



//     Задание 2
// Вы разрабатываете систему отзывов для вашего веб - сайта.Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML - структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];
console.log(initialData);

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const review = document.querySelector('#review');
const buttonElement = document.querySelector('.add-review');
const reviews = document.querySelector('#reviews');
const errorElement = document.querySelector('.error-message');
const selectElement = document.querySelector('#product');
selectElement.textContent = '';
initialData.forEach((element) => {
    const option = document.createElement('option');
    option.textContent = element.product;
    selectElement.appendChild(option);
})
getReviews(initialData);

buttonElement.addEventListener('click', () => {
    let count = 4;
    try {
        if (review.value.length < 3 || review.value.length > 10) {
            throw new Error('Длина отзыва не соответствует.');
        }
        let newReview = {};
        let productName = selectElement.options[selectElement.selectedIndex].text; // находит товар, выбранный в списке select

        const indexOfProduct = findProduct(initialData, productName);
        if (indexOfProduct === -1) {
            // если клиент введет новый товар ( фукнционал не добавлен. есть только выбор из имеющихся товаров - выполнится else)
            // для решения можно добавить поле для ввода названия товара
            newReview.product = selectElement.options[selectElement.selectedIndex].text;
            newReview.reviews = [];
            let newReviewElement = {};
            newReviewElement.id = count++;
            newReviewElement.text = review.value;
            newReview.reviews.push(newReviewElement);
            initialData.push(newReview);
        } else {
            // нашли товар в массиве
            // к его отзывам добавляем новый
            // newReview.product = selectElement.options[selectElement.selectedIndex].text;

            newReview.reviews = initialData[indexOfProduct].reviews;
            let newReviewElement = {};
            newReviewElement.id = count++;
            newReviewElement.text = review.value;
            newReview.reviews.push(newReviewElement);
            // initialData.push(newReview); // новый товар не нужно добавлять, добавляем отзыв к имеющемуся товару
            // console.log(newReview);
        }
        errorElement.textContent = '';
    } catch (error) {
        errorElement.textContent = error.message;
    } finally {
        // вывод на экран
        getReviews(initialData);
    }
});
console.log(initialData);

function getReviews(arrReviews) {
    reviews.textContent = '';
    arrReviews.forEach((element) => {
        const h2 = document.createElement('h2');
        h2.textContent = element.product;
        reviews.appendChild(h2);
        element.reviews.forEach((review) => {
            const p = document.createElement('p');
            p.textContent = review.text;
            reviews.appendChild(p);
        })
    })
}

function findProduct(data, productName) {
    let number = -1;
    data.forEach((element, index) => {
        if (element.product === productName) {
            // console.log('index ' + index);
            // return index; // это только выход из цикла
            number = index;
        }
    })
    return number;
};