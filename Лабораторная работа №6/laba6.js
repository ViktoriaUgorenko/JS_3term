//заданиеи №1
console.log('-------задание1-------');

const numbers = [56, 23, 18, 9, 11];
const [y] = numbers;

console.log(y);

//заданиеи №2
console.log('-------задание2-------');

const user = {
    name: 'vika',
    age: 18
};
const admin = {
    admin: true,
    ...user
};

console.log(admin);

//заданиеи №3
console.log('-------задание3-------');
let store = {
    state: {//1уровень
        profilePage: {//2 уровень
            posts: [//3 уровень
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'By', likesCount: 1 },
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valeria' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Viktor' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi ' },
                { id: 3, message: 'hi hi hi' },
            ],
        },
        sidebar: [],
    },
}

const {
    state: {
        profilePage: { posts, newPostText },
        dialogsPage: { dialogs, messages },
        sidebar
    }
} = store;

posts.forEach(post => console.log(post.likesCount));

const evenIdUsers = dialogs.filter(dialog => dialog.id % 2 === 0);
console.log(evenIdUsers);

const updatedMessages = messages.map(message => ({ ...message, message: "Hello user" }));
console.log(updatedMessages);

//заданиеи №4
console.log('-------задание4-------');

let tasks = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJs', isDone: false },
    { id: 4, title: 'Rest API', isDone: false },
    { id: 5, title: 'GraphQL', isDone: true },
];

let newTask = { id: 6, title: 'NodeJs', isDone: false };

tasks = [...tasks, newTask];

console.log(tasks);

//заданиеи №5
console.log('-------задание5-------');

let array = [1, 2, 3];

function sumValues(x, y, z) {
    return x + y + z;
}

let result = sumValues(...array);
console.log(result);