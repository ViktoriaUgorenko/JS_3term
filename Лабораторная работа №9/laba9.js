console.log('-------задание1-------');

const base = {
    stroke: "black",
};


const yellowSquare = {
    color: "yellow",
    type: "square",
    diametr: 6,
    __proto__: base
};


const whiteCircle = {
    color: "white",
    type: "circle",
    __proto__: yellowSquare,
};


const triangle1 = {
    type: "triangle",
    pattern: "strip",
    __proto__: whiteCircle
};

const littleYellowSquare = {
    __proto__: yellowSquare,
    diametr: 3
};

const greenCircle = {
    __proto__: whiteCircle,
    color: "green"
};

const triangle2 = {
    __proto__: triangle1,
    pattern: "3 strips"
};

console.log("треугольник 2:");
console.log(triangle1.diametr, triangle1.type, triangle1.stroke, triangle1.color);


console.log("круг зеленый:");
console.log(whiteCircle.diametr, whiteCircle.type, whiteCircle.stroke);

console.log("квадрат желтый маленький:");
console.log(yellowSquare.type, yellowSquare.color, yellowSquare.stroke);

console.log("треуголник 1:");
console.log(whiteCircle.color, yellowSquare.diametr, yellowSquare.stroke);

console.log("квадрат желтый:");
console.log(whiteCircle.stroke);

console.log("круг белый:");
console.log(yellowSquare.diametr, yellowSquare.stroke);

console.log("СВОЙСТВА:");

const greenCircleProperties = Object.keys(greenCircle);
console.log("отличающее свойство для зеленого круга:", greenCircleProperties);

for (let property in triangle2) {
    if (triangle2.hasOwnProperty(property)) {
        console.log(`${property}: собственное`);
    } else {
        console.log(`${property}: унаследованное`);
    }
}

console.log("собственное свойство, определяющее цвет, у 'маленького квадрата':", littleYellowSquare.hasOwnProperty("color"));


console.log('-------задание2-------');
class Human {
    constructor(firstName, lastName, yearOfBirth, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
    }

    get age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }

    set age(newAge) {
        this.yearOfBirth = new Date().getFullYear() - newAge;
    }

    setAddress(newAddress) {
        this.address = newAddress;
    }
}

class Student extends Human {
    constructor(firstName, lastName, yearOfBirth, address, faculty, course, group, recordBookNumber) {
        super(firstName, lastName, yearOfBirth, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.recordBookNumber = recordBookNumber;
    }

    setCourse(newCourse) {
        this.course = newCourse;
    }

    setGroup(newGroup) {
        this.group = newGroup;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Faculty {
    constructor(name) {
        this.name = name;
        this.groupsCount = 0;
        this.studentsCount = 0;
        this.students = [];
    }

    setGroupsCount(count) {
        this.groupsCount = count;
    }

    setStudentsCount(count) {
        this.studentsCount = count;
    }

    addStudent(student) {
        this.students.push(student);
        this.studentsCount++;
    }

    getDev() {
        return this.students.filter(student => student.recordBookNumber.startsWith('3')).length;
    }

    getGroup(group) {
        return this.students.filter(student => student.group === group);
    }
}

const facultyFIT = new Faculty("факультет информационных технологий");
facultyFIT.setGroupsCount(5);

const student1 = new Student("Вика", "Угоренко", 2006, "Браслав", "ФИТ", 2, "группа 7", "2");
const student2 = new Student("Егор", "Закревский", 2005, "Новолукомль", "ФИТ", 2, "группа 1", "9");
const student3 = new Student("Андрей", "Касач", 2004, "Лида", "ФИТ", 3, "группа 2", "3");

facultyFIT.addStudent(student1);
facultyFIT.addStudent(student2);
facultyFIT.addStudent(student3);

console.log("количество студентов специальности ДЭВИ:", facultyFIT.getDev());

console.log("студенты группы 1:", facultyFIT.getGroup("группа 1").map(student => student.getFullName()).join(", ")
);
