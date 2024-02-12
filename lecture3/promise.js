// // Пример 1
// // Напишите функцию generateRandomNumber(), которая возвращает Promise, выполняющийся через 1 секунду и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числа, то Promise должен быть отклонен с собщением об ошибке.

// // Шаг 1 
// // т.к. есть время 1 секунда, значит, используем setTimeout():
// setTimeout(() => {
    
// }, 1000);

// // Шаг 2
// // используем псевдогенератор случайного числа
// setTimeout(() => {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
// }, 1000);

// // Шаг 3
// // добавляем промис
// let generateRandomNumber = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 10) + 1;
//             if (randomNumber) {
//                 resolve(randomNumber);
//             } else {
//                 reject('Ошибка генерации случайного числа')
//             }
//         }, 1000);
//     })
// };

// // вызов промиса
// generateRandomNumber()
//     .then((number) => {
//         console.log('Сгенерировано случайнле число: ', number);
//     })
//     .catch((error) => {
//         console.log('Ошибка: ', error);
//     });


// // Пример 2
// // запрос к серверу. от сервера мы получаем json-файл
// // Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise, выполняющий запрос данных по указанному URL. Если запрос завершается успешно, Promise должен резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке.
// let fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => resolve(data))
//             .catch((error) => reject('Ошибка загрузки данных'));
//     })
// }
// //https://randombig.cat/roar.json
// fetchData('https://api.example.com/data')
//     .then((data) => {
//         console.log('Получены данные: ', data);
//     })
//     .catch((error) => {
//         console.log('Ошибка: ', error);
//     })

// // Пример 3
// // Напишите функцию checkFileExists(file), которая принимает имя файла в качестве аргумента и возвращает Promise, выполняющийся через 2 секунды. Promise должен резолвиться, если файл существует, и отклониться, если файла нет.
// let checkIfFileExists = (file) => {
//     // функция должна быть объявлена
// }


// let checkFileExists = (file) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fileExists = checkIfFileExists(file);
//             if (fileExists) {
//                 resolve('Файл существует');
//             } else {
//                 reject('Файл не существует');
//             }
//         }, 2000);
//     })
// }

// checkFileExists('example.txt')
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log('Ошибка: ', error);
//     })


// // Пример 4
// //then Напишите Функцию calculateSum(a, b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен быть выполнен суммой двух чисел.
// // Работаем без catch
// let calculateSum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         const sum = a + b;
//         resolve(sum);
//     })
// }

// calculateSum(3, 7)
//     .then((result) => {
//         console.log('Сумма чисел: ', result);
//     });

// // Пример 5
// // Напишите функцию divideNumbers(a, b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен выполнять деление первого числа на второе. Если второе число равно 0, Promise должен быть отклонен с сообщением о невозможности деления на 0.

// let divideNumbers = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (b === 0) {
//             reject('Невозможно делить на 0');
//         } else {
//             resolve(a / b);
//         }
//     })
// }

// divideNumbers(10, 2)
//     .then((result) => {
//         console.log('Результат деления: ', result);
//     })
//     .catch((error) => {
//         console.log('Ошибка: ', error);
//     })

// // Пример 6
// // Цепочка промисов. Такая цепочка может использоваться в банках. например, списали платеж, после этого только списали комиссию, и после этого только посчитали бонусы (кэшбек)
// new Promise(function (resolve) {
//     setTimeout(() => resolve(1), 1000); // возвращает 1 через 1 сек
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(result * 2), 1000);    // результат, который получился до этого (число 1) умножаем на 2 и возвращаем (число 2)
//     });
// }).then(function (result) { // полученную 2 мы передаем на этот шаг
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(result * 2), 1000);    // умножаем результат (число 2) на 2 и возвращаем число 4
//     });
// }).then(function(result) {
//     console.log(result);
// })

// // Пример 7
// // finally
// let processData = (data) => {
//     // Implement your logic to process the data
//     // Return the processed result
// };

// let performOperation = (data) => {
//     return new Promise((resolve, reject) => {
//         // Perform the operation with the data
//         let result = processData(data);

//         // Complete the Promise
//         if (result) {
//             resolve(result);
//         } else {
//             reject('Ошибка операции');
//         }
//     }).finally(() => {
//         console.log('Операция завершена');
//     })
// }

// performOperation('example')
//     .then((result) => {
//         console.log('Результат операции: ', result);
//     })
//     .catch((error) => {
//         console.log('Ошибка: ', error);
//     });

// // Пример 8
// // Методы для работы с массивом промисов
// // Promise.all()
// Promise.all([   // передаем массив промисов
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     // new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
//     .then(console.log)
//     .catch(console.log);
//     // будет ошибка

// // Пример 9
// // Вы разрабатываете приложение, которое отправляет запросы к разным серверам и хотите определеить, какой сервер отвечает быстрее. напишите функцию checkServerResponse(urls), которая принимает массив URL-адресов в качестве аргумента и возвращает Promise. Promise должен быть выполнен с URL-адресом сервера, который первым ответил на запрос.
// let checkServerResponse = (urls) => {
//     let promises = urls.map((url) => fetch(url));

//     return Promise.race(promises)
//         .then((response) => {
//             return response.url;
//         })
// };

// let urls = [
//     'https://randombig.cat/roar.json',
//     'https://api.example.com/server2',
//     'https://dog.ceo/dog-api/'
// ];

// checkServerResponse(urls)
//     .then((fastestServer) => {
//         console.log('Самый быстрый сервер: ', fastestServer);
//     })
//     .catch((error) => {
//         console.log('Ошибка: ', error);
//     });