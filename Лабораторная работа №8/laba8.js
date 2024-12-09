console.log('-------задание1-------');
let user = {
    name: 'Masha',
    age: 21
};

let copyUser = { ...user };

user.name = "Vika";

console.log(user);
console.log(copyUser);


console.log('-------задание2-------');
let numbers = [1, 2, 3];

let copyNumbers = [...numbers];

numbers[1] = 9;

console.log(numbers);
console.log(copyNumbers);


console.log('-------задание3-------');
let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let copyUser1 = {
    ...user1,
    location: {
        ...user1.location
    }
};

user1.location.city = "Moscow";
user1.location.country = "Russia";

console.log(user1);
console.log(copyUser1);


console.log('-------задание4-------');
let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

let copyUser2 = {
    ...user2,
    skills: [...user2.skills]
};

user2.skills[3] = "Go";

console.log(user2);
console.log(copyUser2);


console.log('-------задание5-------');
const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];

let copyArray = [];

for (let i = 0; i < array.length; i++) {
    copyArray[i] = { ...array[i] };
}

array[2].group = 124;

console.log(array);
console.log(copyArray);


console.log('-------задание6-------');
let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};

let copyUser4 = {
    ...user4,
    studies: {
        ...user4.studies,
        exams: {
            ...user4.studies.exams
        }
    }
};

user4.studies.exams.programming = true;

console.log(user4);
console.log(copyUser4);


console.log('-------задание7-------');
let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10
        },
        exams: [
            { maths: true, mark: 8 },
            { programming: true, mark: 4 },
        ]
    }
};

let copyUser5 = {
    ...user5,
    studies: {
        ...user5.studies,
        department: {
            ...user5.studies.department
        },
        exams: user5.studies.exams.map(exam => ({ ...exam }))
    }
};

copyUser5.studies.department.group = 12;
copyUser5.studies.exams[1].mark = 10;

console.log(user5);
console.log(copyUser5);


console.log('-------задание8-------');
let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD'
                }
            },
            {
                programming: true,
                mark: 8,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD'
                }
            },
        ]
    }
};

let copyUser6 = {
    ...user6,
    studies: {
        ...user6.studies,
        department: {
            ...user6.studies.department
        },
        exams: user6.studies.exams.map(exam => ({
            ...exam,
            professor: { ...exam.professor }
        }))
    }
};

copyUser6.studies.exams[1].professor.name = "Nicolay Nicolaevich";

console.log(user6.studies.exams[1].professor.name);
console.log(copyUser6.studies.exams[1].professor.name);


console.log('-------задание9-------');
let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD',
                    articles: [
                        { title: "About HTML", pageNumber: 3 },
                        { title: "About CSS", pageNumber: 5 },
                        { title: "About JavaScript", pageNumber: 1 },
                    ]
                }
            },
        ]
    }
};

let copyUser7 = {
    ...user7,
    studies: {
        ...user7.studies,
        department: {
            ...user7.studies.department
        },
        exams: user7.studies.exams.map(exam => ({
            ...exam,
            professor: {
                ...exam.professor,
                articles: exam.professor.articles.map(article => ({ ...article }))
            }
        }))
    }
};

copyUser7.studies.exams[0].professor.articles[1].pageNumber = 9;
newName = copyUser7.studies.exams[0].professor.name = "ghg";
console.log(newName);

console.log(user7.studies.exams[0].professor.articles[1].pageNumber);
console.log(copyUser7.studies.exams[0].professor.articles[1].pageNumber);


console.log('-------задание10-------');
let store = {
    state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'By', likesCount: 1 },
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Viktor' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi hi' },
                { id: 3, message: 'hi hi hi' },
            ],
        },
        sidebar: [],
    },
};

let copyStore = {
    state: {
        profilePage: {
            posts: store.state.profilePage.posts.map(post => ({ ...post })),
            newPostText: store.state.profilePage.newPostText,
        },
        dialogsPage: {
            dialogs: store.state.dialogsPage.dialogs.map(dialog => ({ ...dialog })),
            messages: store.state.dialogsPage.messages.map(message => ({ ...message })),
        },
        sidebar: [...store.state.sidebar],
    },
};

store.state.profilePage.posts.forEach(post => (post.message = "Hello"));
store.state.dialogsPage.messages.forEach(message => (message.message = "Hello"));

console.log(store);
console.log(copyStore);
