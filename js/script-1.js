// # Завдання 1

// Напиши функцію-конструктор `Account`, яка створює об'єкт з властивостями `login`
// і `email`. В `prototype` функції-конструктора добав метод `getInfo()`, який
// виводить в консоль значення полів `login` і `email` об'єкта який його викликав.

// ```js
// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com
// ```

const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`Login:${this.login}, Email:${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
