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

console.table(items);

storage.addItem('Дроїд');

console.table(storage.items);

storage.removeItem('Пролонгер');

console.table(storage.items);
