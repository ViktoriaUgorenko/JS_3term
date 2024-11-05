//заданиеи №1
console.log('-------задание1-------');
let set = new Set();

function addTovar(tovar) {
    set.add(tovar)
}

function deleteTovar(tovar) {
    set.delete(tovar)
}

function hasTovar(tovar) {
    return set.has(tovar)
}

function countTovar() {
    return set.size
}

addTovar("яблоко")
addTovar("банан")
addTovar("груша")
addTovar("апельсин")

deleteTovar("банан")

for (let value of set) console.log(value);

console.log("наличие тавара 'груша': ", hasTovar("груша"))

console.log(countTovar());

//заданиеи №2
console.log('-------задание2-------');
let students = new Set()

function addStudent(st) {
    students.add(st)
}

function deleteStudent(studentId) {
    students.forEach((student) => {
        if (student.studentId === studentId) {
            students.delete(student);
        }
    });
}

function filterByGroup(group) {
    let filteredStudents = new Set();
    students.forEach((student) => {
        if (student.group === group) {
            filteredStudents.add(student);
        }
    });
    return filteredStudents;
}

function sortById() {
    let sortedStudents = Array.from(students);
    sortedStudents.sort((a, b) => {
        return a.studentId - b.studentId;
    });
    return sortedStudents;
}

addStudent({ studentId: 43, group: 'Группа 7', fullName: 'Угоренко Вика' });
addStudent({ studentId: 76, group: 'Группа 10', fullName: 'Бабич Вета' });
addStudent({ studentId: 567, group: 'Группа 9', fullName: 'Яскевич Лера' });

console.log("список студентов:");
for (let value of students) console.log(value);

deleteStudent(43)

console.log("список студентов после удаления:");
for (let value of students) console.log(value);

let filteredStudents = filterByGroup('Группа 10')
console.log("студенты из 10 группы:", filteredStudents);

let sortedStudents = sortById();
console.log("отсортированный список по номеру зачетки:", sortedStudents);

//заданиеи №3
console.log('-------задание3-------');

let products = new Map();

function addProduct(id, name, quantity, price) {
    products.set(id, { name, quantity, price });
}

function deleteById(id) {
    products.delete(id);
}

function deleteByName(name) {
    products.forEach((product, id) => {
        if (product.name === name) {
            products.delete(id);
        }
    });
}

function updateQuantity(id, newQuantity) {
    if (products.has(id)) {
        let product = products.get(id);
        product.quantity = newQuantity;
        products.set(id, product);
    }
}

function updatePrice(id, newPrice) {
    if (products.has(id)) {
        let product = products.get(id);
        product.price = newPrice;
        products.set(id, product);
    }
}

function countProducts() {
    return products.size;
}

function TotalCost() {
    let totalCost = 0;
    products.forEach((product) => {
        totalCost += product.quantity * product.price;
    });
    return totalCost;
}

addProduct(1, "товар 1", 5, 10);
addProduct(2, "товар 2", 3, 15);
addProduct(3, "товар 3", 2, 20);
addProduct(4, "товар 4", 1, 5);

console.log("хранилище товаров:", products);

deleteById(2);
console.log("хранилище товаров после удаления товара по id:", products);

deleteByName("товар 1");
console.log("хранилище товаров после удаления товаров по названию:", products);

updateQuantity(3, 4);
console.log("хранилище товаров после изменения количества товара:", products);

updatePrice(3, 1);
console.log("хранилище товаров после изменения стоимости товара:", products);

let productCount = countProducts();
console.log("кол-во товаров в списке:", productCount);

let totalCost = TotalCost();
console.log("общая стоимость всех товаров:", totalCost);

//заданиеи №4
console.log('-------задание4-------');

let cache = new WeakMap();

function cacheFunction(a) {
    if (cache.has(a)) {
        console.log("взято из кэша");
        return cache.get(a);
    }

    const result = a.key * 2;
    cache.set(a, result);

    return result;
}

const a1 = { key: 5 };
const a2 = { key: 10 };

console.log(cacheFunction(a1));
console.log(cacheFunction(a1));

console.log(cacheFunction(a2));
console.log(cacheFunction(a2)); 