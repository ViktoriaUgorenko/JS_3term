console.log('-------задание1-------');

const set = new Set([1, 1, 2, 3, 4]);

console.log(set);

console.log('-------задание2-------');

const nAme = "Lydia";
age = 21;

console.log(delete nAme);
console.log(delete age);

console.log('-------задание3-------');

const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);

console.log('-------задание4-------');

const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);


console.log('-------задание5-------');

const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));

console.log('-------задание6-------');

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

console.log('-------задание7-------');

let num = 10;
const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

console.log('-------задание8-------');

const value = { number: 10 };

const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

console.log('-------задание9-------');

[1, 2, 3, 4,].reduce((x, y) => console.log(x, y));
