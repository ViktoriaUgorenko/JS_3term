// задание №1
console.log('-------задание1-------');

const person = {
    name: "Vika",
    age: 18,
    greet() {
        console.log(`привет, ${this.name}`);
    },
    ageAfterYears(years) {
        return this.age + years;
    }
};

person.greet();
console.log(person.ageAfterYears(2));

// задание №2
console.log('-------задание2-------');

const car = {
    model: "G6",
    year: 1996,
    getinfo() {
        console.log(`модель: ${this.model}, год: ${this.year}`);
    }
};

car.getinfo();

// задание №3
console.log('-------задание3-------');

function Book(title, author) {
    this.author = author;
    this.title = title;

    this.getTitle = function (title) {
        return this.title;
    };

    this.getAuthor = function (author) {
        return this.author;
    };
}

const book = new Book('Агата Кристи', 'Убийство на поле для гольфа');

console.log(book.getAuthor());
console.log(book.getTitle());

// задание №4
console.log('-------задание4-------');

const player = {
    players: [
        { name: 'Вика Угоренко', number: 22 },
        { name: 'Лера Яскевич', number: 9 },
        { name: 'Виолетта Бабич', number: 25 },
        { name: 'Данила Миронов', number: 13 },
        { name: 'Кирилл Сергенев', number: 14 },
    ],

    allInfoAboutPlayer() {
        this.players.forEach(info => {
            console.log(`игрок: ${info.name}, номер: ${info.number}`);
        });
    }
};

player.allInfoAboutPlayer();


// задание №5
console.log('-------задание5-------');

const counter = (function () {
    let count = 0;

    return {
        increment: function () {
            return ++count;
        },

        decrement: function () {
            return --count;
        },

        getCount: function () {
            return count;
        }
    };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1


// задание №6
console.log('-------задание6-------');
const item = { price: 100 };
console.log(item.price);

item.price = 150;
console.log(item.price);

Object.defineProperty(item, 'price', {
    writable: false,
    configurable: false
});

item.price = 200;
console.log(item.price);

delete item.price;
console.log(item.price);

// задание №7
console.log('-------задание7-------');

const circle = {
    radius: 5,

    get radiuss() {
        return this.radius;
    },

    set radiuss(a) {
        if (a > 0) {
            return this.radius;
        }
        else {
            console.log("радиус должен быть больше 0");
        }
    },
    get area() {
        return Math.PI * this.radius ** 2;
    }
}

circle.radiuss = 10;
console.log(circle.radiuss);
console.log(circle.area);

circle.radiuss = -2;
console.log(circle.radiuss);

// задание №8
console.log('-------задание8-------');

const cars = {
    make: "audi",
    model: "a6",
    year: 2014
};

console.log(cars.make);
cars.make = "bmw";
console.log(cars.make);

Object.defineProperty(cars, 'make', { writable: false, configurable: false });
Object.defineProperty(cars, 'model', { writable: false, configurable: false });
Object.defineProperty(cars, 'year', { writable: false, configurable: false });

cars.make = "porshe";
console.log(cars.make);

delete cars.model;
console.log(cars.model);

// задание №9
console.log('-------задание9-------');

const numbers = [1, 6, 13];

Object.defineProperty(numbers, 'sum', {
    get() {
        return this.reduce((acc, num) => acc + num, 0);
    },
    enumerable: true,
    configurable: false
});

console.log(numbers.sum);

numbers.sum = 100;
console.log(numbers.sum);


// задание №10
console.log('-------задание10-------');

const rectangle = {
    width: 0,
    height: 0,

    get widthh() {
        return this.width;
    },

    set widthh(c) {
        if (c > 0) {
            this.width = c;
        } else {
            console.log("ширина должна быть больше 0");
        }
    },

    get heightt() {
        return this.height;
    },

    set heightt(b) {
        if (b > 0) {
            this.height = b;
        } else {
            console.log("высота должна быть больше 0");
        }
    },

    get area() {
        return this.width * this.height;
    }
};

rectangle.widthh = 5;
rectangle.heightt = 10;
console.log(rectangle.widthh);
console.log(rectangle.heightt);
console.log(rectangle.area);

rectangle.widthh = -3;
console.log(rectangle.widthh);


// задание №11
console.log('-------задание11-------');

const user = {
    firstNAme: "vika",
    lastNAme: "ugorenko",

    get fullName() {
        return this.firstNAme + " " + this.lastNAme;
    },

    set fullName(name) {
        const [first, last] = name.split(" ");
        if (first && last) {
            this.firstNAme = first;
            this.lastNAme = last;
        } else {
            console.log("должны быть и фамилия и имя");
        }
    }
}
console.log(user.fullName);

user.fullName = "lera yask";
console.log(user.firstNAme);
console.log(user.lastNAme);
console.log(user.fullName);

user.fullName = "artem"; 