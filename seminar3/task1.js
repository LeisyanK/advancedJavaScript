// Вы разрабатываете прототип веб - приложения для чтения новостей.Статьи "хранятся" во внутреннем массиве
//     (имитируя базу данных).Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен 
// имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
// задержки — отображать новости на странице.
// 1. Создайте базовую HTML - структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// 2. Реализуйте функцию fetchNews(), возвращающую промис.Эта функция должна имитировать 
// задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных.Для 
// добавления интереса: с вероятностью 10 % она должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное 
// выполнение и ошибки с использованием then() и catch ().
// 4. При успешной загрузке отобразите статьи на странице.При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует 
// её снова после завершения операции(будь то успешная загрузка или ошибка).
"use strict";

const news = [
    {
        title: "Новость 1",
        text: "Содержание 1"
    },
    {
        title: "Новость 2",
        text: "Содержание 2"
    },
    {
        title: "Новость 3",
        text: "Содержание 3"
    }
];

const fetchNews = () => {
    let chahce = Math.random() * 100;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (chahce > 50) {
                resolve(news);
            } else {
                reject('Ошибка получения данных')
            }
        }, 2000);
    })
}

const newsDiv = document.querySelector('.news');
const loadNewsBtn = document.querySelector('#loadNews');
loadNewsBtn.addEventListener('click', function() {
    loadNewsBtn.disabled = true;
    fetchNews() // вызов функции
        .then((data) => {
            for(const article of data) {
                let h1 = document.createElement('h1');
                let p = document.createElement('p');
                let articleDiv = document.createElement('div');
                h1.textContent = article.title;
                p.textContent = article.text;
                articleDiv.append(h1);
                articleDiv.append(p);
                newsDiv.prepend(articleDiv)
            // console.log(data)
            };
            // второй вариант
            // data.forEach(article => {
            //     const articleDiv = document.createElement('div');
            //     articleDiv.innerHTML = `<h2>${article.title}</h2><p>${article.text}</p>`;
            //     newsDiv.appendChild(articleDiv);
            // });
            // loadNewsBtn.disabled = false
        })
        .catch((error) => {
            let errorDiv = document.createElement('div');
            errorDiv.textContent = error;
            newsDiv.append(errorDiv);
            console.log('Ошибка: ', error)
        })
        .finally ( () => {      // без функции выполнится сразу же, и кнопка будет разблокирована
            loadNewsBtn.disabled = false
        });
})
// fetchNews() // вызов функции
//     .then()
//     .catch()