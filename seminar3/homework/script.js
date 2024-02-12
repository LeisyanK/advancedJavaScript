// Создайте интерактивную веб - страницу для оставления и просмотра отзывов о продуктах.Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
//     Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва(при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const reviews = [
    {
        product: "Canon 4540",
        review: [
            "Отзыв 1",
            "Отзыв 2",
            "Отзыв 3",
        ]
    },
    {
        product: "BenQ 15H",
        review: [
            "Отзыв 4",
            "Отзыв 5",
        ]
    },
    {
        product: "Samsung 25S",
        review: []
    }
];

const reviewsContainer = document.querySelector('.reviews');

const fetchReviews = () => {
    let chahce = Math.random() * 100;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (chahce > 10) {
                resolve(reviews);
            } else {
                reject('Ошибка получения данных')
            }
        }, 2000);
    })
}

document.addEventListener('DOMContentLoaded', function () {
    localStorage.clear();
    fetchReviews()
    .then((data) => {
        // вывод отзывов на страницу
        data.forEach((rev) => {
            console.log(typeof (rev));
            if (rev.review.length > 0) {
                const productBox = document.createElement('div');
                productBox.innerHTML = `<h2>${rev.product}</h2>`;
                const reviewBox = document.createElement('div');
                reviewBox.classList.add('hidden');
                rev.review.forEach((elem) => {
                    console.log(elem);
                    // reviewBox.innerHTML += `<p>${elem} <button class="del_rev">Удалить</button></p>`;
                    reviewBox.innerHTML += `<p>${elem}</p>`;
                    const delBtn = document.createElement('button');
                    delBtn.textContent = "Удалить";
                    reviewBox.appendChild(delBtn);
                    delBtn.addEventListener('click', () => {
                        console.log("Удален отзыв");
                    })
                    // reviewBox.innerHTML += `</p>`;
                    // localStorage.setItem(rev.product,elem);
                });
                productBox.addEventListener('click', () => {
                    reviewBox.classList.toggle('hidden');
                })
                // localStorage.setItem(rev.product, rev.review);

                reviewsContainer.append(productBox);
                productBox.append(reviewBox);
                console.log(reviewsContainer);
            }
            // добавляем в localStorage
            localStorage.setItem(rev.product, rev.review);
        });
        // productBox.innerHTML = `<p>Получили данные</p>`;
    })
    .catch((error) => {
        // вывод ошибки загрузки
        const productBox = document.createElement('div');
        productBox.innerHTML = `<p>Получили ошибку: ${error}</p>`;
        reviewsContainer.append(productBox);
    })
})
// document.onload = function() {
//     fetchReviews()
//         .then((data) => {
//             // вывод отзывов на страницу
//             const productBox = document.createElement('div');
//             productBox.innerHTML = `<p>Получили данные</p>`;
//             reviewsContainer.append(productBox);
//         })
//         .catch((error) => {
//             // вывод ошибки загрузки
//             const productBox = document.createElement('div');
//             productBox.innerHTML = `<p>Получили ошибку: ${error}</p>`;
//             reviewsContainer.append(productBox);
//         })
// }

document.querySelector('#checkBox').addEventListener('change', () => {
    document.querySelector('#labelForInput').classList.toggle('hidden');
    document.querySelector('#labelForSelect').classList.toggle('hidden');
})
document.querySelector('#addReview').addEventListener('click', () => {
    const productName = document.querySelector('#productName');
    const productReview = document.querySelector('#productReview');
    console.log(productName.value, productReview.value);
    if (productName.value && productReview.value) {
        localStorage.setItem(productName.value, productReview.value);
        const obj = {};
        obj.product = productName.value;
        obj.review = [];
        obj.review.push(productReview.value);
        reviews.push(obj);
        console.log(reviews);
    }
})