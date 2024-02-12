// Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в систему, используя данные, сохраненные в localStorage.

// Приложение будет состоять из трех основных страниц:
// - Страница регистрации:
// Предлагает пользователю ввести логин и пароль.
// После ввода данных они сохраняются в localStorage.
// Пользователь перенаправляется на страницу входа.
// - Страница входа:
// Предлагает пользователю ввести логин и пароль.
// Если введенные данные совпадают с данными из localStorage, пользователь перенаправляется на страницу приветствия.
// Если данные не совпадают, выводится сообщение об ошибке.
// - Страница приветствия:
// Простое приветственное сообщение для авторизованного пользователя.
// Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.

function main () {
    if (localStorage.getItem('login') === 'user' && localStorage.getItem('password') === '123') {
        window.location.href = 'hello.html';
    } else {
        window.location.href = 'index3.html';
    }
}


// registration.html
var regLogin = document.querySelector('#reg_login');
var regPassword = document.querySelector('#reg_password');
var addUser = document.querySelector('#add_user');

var login = document.querySelector('#login');
var password = document.querySelector('#password');
var enterBtn = document.querySelector('#enter_btn');
var exitBtn = document.querySelector('#exit');

addUser.addEventListener('click', () => {
    if (regLogin.value && regPassword.value) {
        localStorage.setItem('login', regLogin.value);
        localStorage.setItem('password', regPassword.value);
        // window.open('hello.html');
        window.location.href = 'hello.html';
    } else {
        alert('Введите все данные');
        // const errorDiv = document.createElement('div');
        // errorDiv.innerHTML = '<p>Введите все данные</p>';
        // document.insertBefore(errorDiv, regLogin);
    }
});

enterBtn.addEventListener('click', () => {
    if (login.value === 'user' && password.value === '123') {
        localStorage.setItem('login', login.value);
        localStorage.setItem('password', password.value);
        window.location.href = 'hello.html';
    } else {
        alert('Неправильный логин или пароль')
    }
});

exitBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'index3.html';
})

// main();