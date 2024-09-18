//заданиеи №1
console.log('-------задание1-------');
function basicOperation(operation, value1, value2) {
    value1 = Number(value1);
    value2 = Number(value2);

    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 'Invalid operation';
    }
}

result1 = basicOperation('+', '2', '3');
result2 = basicOperation('-', '3', '1');
result3 = basicOperation('*', '4', '5');
result4 = basicOperation('/', '24', '3');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

//задание №2
console.log('-------задание2-------');
function kuby(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i * i;
    }
    return sum;
}
result5 = kuby(2);
console.log(result5);

//задание №3
console.log('-------задание3-------');
function arraySum(arr) {

    let allSum = arr.reduce((sum, current) => sum + current, 0);
    let countOfEl = arr.length;
    return allSum / countOfEl;
}

let result6 = arraySum([8, 10, 15]);
console.log(result6);

//задание №4
console.log('-------задание4-------');
function naoborotAndEng(str) {
    let english = /[a-zA-Z]/g;
    let engStr = str.match(english);
    if (engStr) {
        let reversedEngStr = engStr.reverse().join("");
        return reversedEngStr;
    } else {
        return '';
    }
}

let result7 = naoborotAndEng('Hello,меня зовут Vika');
console.log(result7);

//задание №5
console.log('-------задание5-------');
function srtN(n, str) {
    let stroka = str.repeat(n);
    return stroka;
}

let result8 = srtN(3, 'la');
console.log(result8);

//задание №6
console.log('-------задание6-------');
function arrOfStr(arr1, arr2) {
    let strin = arr1.filter(str => arr2.includes(str));
    return strin;
}

arr1 = ['hi', 'my', 'name', 'is', 'Vika']
arr2 = ['oh', 'my', 'name', 'is', 'Katya']
let result9 = arrOfStr(arr1, arr2);
console.log(result9);