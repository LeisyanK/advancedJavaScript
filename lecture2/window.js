// console.log(window);
// console.log(window.window);
// console.log(self);
// console.log(frames);
// console.log(globalThis);

// Работа с window
// const newWindow = window.open('https://www.ya.ru', '_black');   // открывает страницу в новой вкладке браузера
// window.close(); // закрывает текущее окно
// window.resizeTo(800, 600);  // изменяет размер окна на 800х600 пикселей
// window.location.href = 'https://www.ya.ru';     // перенаправляет на другую страницу
// console.log(window.location);
// const windowWidth = window.innerWidth;  // получает ширину окна

// Работа с window.window
// const isWindowOpen = window.window.open('https://www.ya.ru') !== null;  // проверяет, открыто ли окно
// const windowHeight = window.window.innerHeight;     // получает высоту окна
// window.window.location.href = 'https://www.ya.ru';  // перенаправляет на другую страницу во вложенном окне

// Работа с self
// const newWindowSelf = self.open('https://www.ya.ru', '_black');   // открывает страницу в новой вкладке браузера
// self.close(); // закрывает текущее окно
// self.resizeTo(800, 600);  // изменяет размер окна на 800х600 пикселей
// self.location.href = 'https://www.ya.ru';     // перенаправляет на другую страницу

// Работа с frames
// const frame = frames[0];                           // получает ссылку на фрейм по индексу
// frames[0].location.href = 'https://www.ya.ru';     // перенаправляет на другую страницу во фрейме
// const framesCount = frames.length;                 // получает количество фреймов на странице
// const parentWindow = window.parent;                // получает доступ к родительскому окну во фрейме

// Работа с globalThis
// const globalObject = globalThis;                      // получает глобальный объект
// globalThis.newVariable = 'Hello, world!'              // определяет новую глобальную переменную
// const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker'; // получает доступ к глобальным переменным из разных сред исполнения