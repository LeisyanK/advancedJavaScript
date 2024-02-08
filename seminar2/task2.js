// У вас есть базовый список пользователей.Некоторые из них имеют информацию о своем премиум - аккаунте, а
// некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о 
// наличии премиум - аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
// и instanceof.
// 1. Создайте базовый класс User с базовой информацией(например, имя и фамилия).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User.Класс 
// PremiumUser должен иметь свойство premiumAccount(допустим, дата истечения срока 
// действия), а у RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и 
// возвращает информацию о наличии и сроке действия премиум - аккаунта, используя 
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного 
// пользователя и дайте соответствующий ответ.
class User {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }
}
class PremiumUser extends User {
    premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // установили срок действия на год вперед
    // get premiumAccount () {
    //     return this.premiumAccount;
    // }
}
class RegularUser extends User {

}
function getAccountInfo(user) {
    if (user instanceof PremiumUser) {
        return `Премиум-аккаунт действителен до ${new Date(user.premiumAccount).toLocaleString()}.` ?? 'Информация об премиум-аккаунте отсутствует.';
    } else if (user instanceof RegularUser) {
        return `Премиум-аккаунт отсутствует.`;
    } else {
        return `Тип пользователя не определен.`
    }
}

const user1 = new User("Иван", "Петров");
const user2 = new PremiumUser("Сергей", "Сергеев");
const user3 = new User("Алена", "Сидорова");
const user4 = new RegularUser("Елена", "Соколова");

console.log(getAccountInfo(user1));
console.log(getAccountInfo(user2));
console.log(getAccountInfo(user3));
console.log(getAccountInfo(user4));
