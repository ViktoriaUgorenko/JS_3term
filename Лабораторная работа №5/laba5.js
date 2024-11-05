//заданиеи №2
console.log('-------задание2-------');
function volume(length, width, height) {
    return length * width * height;
}

function curriedVolume(length) {
    return function (width, height) {
        return volume(length, width, height);
    };
}
const fixedLength = 5;
const calculateVolumeWithFixedLength = curriedVolume(fixedLength);

const width = 3;
const height = 4;
const result = calculateVolumeWithFixedLength(width, height);

console.log(result);

//заданиеи №3
console.log('-------задание3-------');
function* moveObject() {

    let x = 0
    let y = 0
    let step

    for (let i = 0; i < 10; i++) {
        step = prompt('Введите команду ', '')
        switch (step) {
            case 'left':
                x--;
                break;
            case 'right':
                x++;
                break;
            case 'up':
                y++;
                break;
            case 'down':
                y--;
                break;
        }
        alert(`Координаты: (${x}.${y})`)
    }

}

let command = moveObject()
let move = command.next().value


//заданиеи №4
console.log('-------задание4-------');
var globalVariable = "Hello, world!";

function globalFunction() {
    console.log("Это глобальная функция");
}

console.log(window.globalVariable);
window.globalFunction();

window.globalVariable = "Переопределенная переменная";

window.globalFunction = function () {
    console.log("Переопределенная функция");
};

console.log(globalVariable);
globalFunction();