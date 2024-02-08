// Пользователи вашего сайта могут добавлять элементы в список.Но есть условие: 
// введенное значение должно содержать от 3 до 10 символов.
// 1. Создайте HTML - структуру с текстовым полем, кнопкой и списком.
// 2. Напишите функцию, которая будет добавлять элементы в список или 
// генерировать исключение, если длина введенного значения не соответствует
// требованиям.

const userInput = document.querySelector('.user-input');
const buttonElement = document.querySelector('.add-button');
const listElement = document.querySelector('.item-list');
const errorElement = document.querySelector('.error-message');

buttonElement.addEventListener('click', () => {
    try {
        if (userInput.value.length < 3 || userInput.value.length > 10) {
            throw new Error('длина введенного значения не соответствует требованиям.')
        }
        const li = document.createElement('li');
        li.textContent = userInput.value;
        listElement.appendChild(li);
        errorElement.textContent = '';
    } catch (error) {
        errorElement.textContent = error.message;
    } finally {
        console.log('Попытка добавления завершена.');
    }
})