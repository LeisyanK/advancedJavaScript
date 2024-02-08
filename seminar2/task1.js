// Давайте создадим класс для управления банковским счетом.В этом классе будет приватное 
// свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется 
// значением 0 и представляет собой текущий баланс счета.
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
//     Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
// ошибку.
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
//     Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в 
// противном случае выбрасывайте ошибку.
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
//     Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
// ошибку.
class BankAccount {
    #balance = 0;
    get balance () {
        return this.#balance;
    }
    deposit(amount) {
        if (amount < 0 || typeof(amount) !== 'number') {
            throw new Error('Сумма отрицательная');
        } 
        if (amount >= this.#balance) {
            throw new Error('Недостаточно средств');
        }
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount < 0) {
            throw new Error('Сумма отрицательная');
        }
        if (amount <= this.#balance) {}
        this.#balance -= amount;
        
    }
    constructor (initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error('Сумма отрицательная');
        }
        this.#balance = initialBalance;
    }
}

let account = new BankAccount(500);
console.log(account.balance);

account.deposit(200);
console.log(account.balance);

account.withdraw(100);
console.log(account.balance);
