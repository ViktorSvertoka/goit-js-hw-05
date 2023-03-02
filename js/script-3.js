// # Завдання 3

// Напиши клас `Storage`, який буде створювати об'єкти для управління складом
// товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і
// записувати його у властивість `items`.

// Додай методи класу:

// - `getItems()` - повертає масив поточних товарів
// - `addItem(item)` - отримує новий товар і додає його до поточних
// - `removeItem(item)` - отримує товар і, якщо він є, видаляє його з поточних

// ```js
// const storage = new Storage([
//   "Нанітоіди",
//   "Пролонгер",
//   "Залізні жупи",
//   "Антигравітатор",
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem("Дроїд");
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
// ```

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    items.splice(this.items.indexOf(item), 1);
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();

console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');

console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');

console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
