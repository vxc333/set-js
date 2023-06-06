module.exports = class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    return this.items.hasOwnProperty(element);
  }  

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    let count = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }

  values() {
    const values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key]);
      }
    }
    return values;
  }

  union(otherSet) {
    const unionSet = new Set();
    const thisValues = this.values();
    const otherValues = otherSet.values();

    for (let i = 0; i < thisValues.length; i++) {
      unionSet.add(thisValues[i]);
    }

    for (let i = 0; i < otherValues.length; i++) {
      unionSet.add(otherValues[i]);
    }

    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const thisValues = this.values();

    for (let i = 0; i < thisValues.length; i++) {
      if (otherSet.has(thisValues[i])) {
        intersectionSet.add(thisValues[i]);
      }
    }

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();
    const thisValues = this.values();

    for (let i = 0; i < thisValues.length; i++) {
      if (!otherSet.has(thisValues[i])) {
        differenceSet.add(thisValues[i]);
      }
    }

    return differenceSet;
  }

  isSubsetOf(otherSet) {
    const thisValues = this.values();

    for (let i = 0; i < thisValues.length; i++) {
      if (!otherSet.has(thisValues[i])) {
        return false;
      }
    }

    return true;
  }
};

// Amostras e Testes
const Set = require("./set.js");
const mySet1 = new Set();
const mySet2 = new Set();

mySet1.add(1);
mySet1.add(3);
mySet1.add(5);


mySet2.add(2);
mySet2.add(4);
mySet2.add(5);
mySet2.add(6);

console.log(`Conjunto 1 : ${mySet1.values()}`)
console.log(`Conjunto 2 : ${mySet2.values()}`)

// União

const unionSet = mySet1.union(mySet2);
console.log(`União dos Conjuntos : ${unionSet.values()}`);

// Intersepção

const intersectionSet = mySet1.intersection(mySet2);
console.log(`Intersepção do Conjunto 1 do Conjunto 2 : ${intersectionSet.values()}`);

// Diferença

const difference = mySet1.difference(mySet2);
console.log(`Diferença do Conjunto 1 do Conjunto 2 : ${difference.values()}`);