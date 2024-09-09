//задание 1
let a = 5;
let names = "Name";
let i = 0;
let double = 0.23;
let result = 1 / 0;
let answer = true;
let no = null;

console.log(typeof a);
console.log(typeof names);
console.log(typeof i);
console.log(typeof double);
console.log(typeof result);
console.log(typeof answer);
console.log(typeof no);

//задание 2
let wA = 45;
let hA = 21;
let b = 5;

let squareB = b * b;
let squareA = wA * hA;

let numberSquares = Math.round(squareA / squareB);
console.log('Ответ:', numberSquares);

//задание 3
let i = 2;
let a = ++i; //префикс. инкремент а=3
let b = i++;// i=3, b =4

//задание 4
let comparison1 = 'Котик === котик' ? 'true' : 'false';
console.log(comparison1);

let comparison2 = 'Котик === китик ' ? 'true' : 'false';
console.log(comparison2);

let comparison3 = 'Кот === Котик' ? 'true' : 'false';
console.log(comparison3);

let comparison4 = 'Привет === Пока' ? 'true' : 'false';
console.log(comparison4);

let comparison5 = 73 === '53' ? 'true' : 'false';
console.log(comparison5);

let comparison6 = 0 === 'false' ? 'true' : 'false';
console.log(comparison6);

let comparison7 = 54 === 'true' ? 'true' : 'false';
console.log(comparison7);

let comparison8 = 123 === 'false' ? 'true' : 'false';
console.log(comparison8);

let comparison9 = 'true' === '3' ? 'true' : 'false';
console.log(comparison9);

let comparison10 = 3 === '5mm' ? 'true' : 'false';
console.log(comparison10);

let comparison11 = 8 === '-2' ? 'true' : 'false';
console.log(comparison11);

let comparison12 = 34 === '34' ? 'true' : 'false';
console.log(comparison12);

let comparison13 = null === undefined ? 'true' : 'false';
console.log(comparison13);

//задание 5
teacherName = prompt('Введите имя преподавателя:', '');
let var1 = 'Елена Владимировна';
let var2 = 'Обухова Елена Владимировна';
let var3 = 'Елена';
let answer = (teacherName == var1 || teacherName == var2 || teacherName == var3) ? 'true' : 'false';
concole.log(answer)

//задание 6
let math = confirm('cдана ли мтаематика');
let rus = confirm('сдан ли русский');
let eng = confirm('cдан ли английский');
(rus == true && math == true && eng == true) ? alert('следующий курс') :
    (rus == false && math == false && eng == false) ? alert('отчисление') : alert('епресдача')

//задание 7
true + true //true=1, 1+1=2
0 + "5"     // 05 (тк строка и число)
5 + "мм"    //5мм (тк строка и число)
8 / Infinity //0 (тк число на бесконечность и число стремится к 0)
9 * "\n9"   //81 тк символ новой строки игнорируется
null - 1    //-1(null=0)
"5" - 2     //3
"5px" - 3   //не число
true - 3    // -2
7 || 0  //7
console.log("5px" - 3);

//задание 8

for (i = 1; i <= 10; i++) {
    if (i % 2) {
        let numb = i + 2;
        alert(numb);
    }
    else {
        let str = i + "мм";
        alert(str);
    }
}

//задание 9
let days = [1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс',]; //массив
let numberDay = dayNubmer(prompt('введите номер дня:'));
alert(days[numberDay]);

let days = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс" }; //объект
let numberDay = dayNubmer(prompt('введите номер дня:'));
alert(days[numberDay]);

//задание 10
function func(n1 = "Default", n2, n3 = prompt("введите парнаетр", '')) {
    return "первый параметр " + n1 + " второй параметр " + n2 + " третий параметр " + n3;
}

//задание 11
function params(a, b) {
    if (a === b) {
        return 4 * a;
    } else {
        return a * b;
    }
}

const params = function (a, b) {
    if (a === b) {
        return 4 * a;
    } else {
        return a * b;
    }
};

const params = (a, b) => {
    if (a === b) {
        return 4 * a;
    } else {
        return a * b;
    }
};
