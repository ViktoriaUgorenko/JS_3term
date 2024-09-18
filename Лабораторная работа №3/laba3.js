
//заданиеи №1
console.log('-------задание1-------');
let arr1 = [1, [1, 2, [3, 4]], [2, 4]];
arrResult = arr1.reduce((acc, cur) => arr1.concat(cur), []);
console.log(arrResult);

//заданиеи №2
console.log('-------задание2-------');
function sumArr(arr) {
    return arr.reduce((sum, num) => {
        return sum + (Array.isArray(num) ? sumArr(num) : num);
    }, 0);
}

arr3 = sumArr([1, 5, [78, 3, 12], 0, 4, [2, 9]]);
console.log(arr3);

//задание №3
console.log('-------задание3-------');
function students(arrOfStd) {
    let student = arrOfStd.filter(arrOfStd => arrOfStd.age > 17).reduce((acc, arrOfStd) => {

        if (!acc[arrOfStd.groupId]) {
            acc[arrOfStd.groupId] = [];
        }
        acc[arrOfStd.groupId].push(arrOfStd);
        return acc;
    }, {});
    return student;
}
arr4 = students([
    { name: 'Vika', age: 18, groupId: 7 },
    { name: 'Violetts', age: 17, groupId: 7 },
    { name: 'Lera', age: 19, groupId: 2 },
    { name: 'Artem', age: 16, groupId: 5 }
]);
console.log(arr4);

//задание №6
console.log('-------задание6-------');
function piramidka(n) {
    let arr5 = [];
    for (let i = 1; i <= n; i++) {
        let arr6 = " ".repeat(n - i) + "*".repeat(2 * i - 1) + " ".repeat(n - i);
        arr5.push(arr6);
    }
    return arr5;
}
let result = piramidka(9);
console.log(result);

//задание №5
console.log('-------задание5-------');
function newObject(...object) {
    return Object.assign(...object);
}
let result2 = newObject({ a: 1, b: 4 }, { a: 9, c: 8, s: 9 });
console.log(result2);

//задание №4
console.log('-------задание4-------');
function sumASCII(str) {
    let total1 = "";
    let total2 = "";
    for (i = 0; i < str.length; i++) {
        total1 += str.charCodeAt(i);
    }
    for (i = 0; i < str.length; i++) {
        total2 += String(str.charCodeAt(i)).replace(/7/g, '1');
    }
    return total1 - total2;
}
let result3 = sumASCII("ABC");
console.log(result3);