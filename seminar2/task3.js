// Вы создаете интерфейс, где пользователь вводит число. 
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать 
// соответствующий ответ.
// 1. Создайте HTML - структуру: текстовое поле для ввода числа и кнопку
// "Проверить".
// 2. Добавьте место(например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку.Эта функция 
// должна использовать try и catch для проверки вводимого значения.

const buttonElement = document.querySelector("button");
const inputElement = document.querySelector("input");
// const infoElement = document.nextSibling;
const infoElement = document.querySelector('#info');
buttonElement.addEventListener('click', () => {
    try {
        // const inputValue = inputElement.value;
        const inputValue = (inputElement.value).trim(); // убирает все пробелы
        // if (isNaN(inputValue) || inputValue === "" || inputValue == " " * inputValue.length) {
        //     throw new Error('Введенное значение не является числом');
        // }
        if (inputElement.value === '' || isNaN(inputElement.value) || inputElement.value == ' ' * inputElement.value.length) {
            throw new Error('Введенное значение не является числом');
        }
        // if (typeof (inputElement.value) !== 'number') {
        //     throw new Error('Введенное значение не является числом');
        // }
        infoElement.textContent = 'Введенное значение является числом';
        // console.log('Введенное значение является числом');
        
    } catch (error) {
        infoElement.textContent = error.message;
        // console.log('Введенное значение не является числом');
    }
})