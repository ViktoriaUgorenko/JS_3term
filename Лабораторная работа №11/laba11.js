console.log('-------задание1-------');

class Task {
    constructor(id, title, isCompleted = false) {
        this.id = id;
        this.title = title;
        this.isCompleted = isCompleted;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    toggleCompletion() {
        this.isCompleted = !this.isCompleted;
    }
}

let task1 = new Task(1, "проснуться в 6:30 утра");

console.log(task1.isCompleted);

task1.toggleCompletion();
console.log(task1.isCompleted);

task1.setTitle("сделать зарядку");
console.log(task1.title);

console.log('-------задание2-------');

class TodoList {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks = [];
    }

    setListTitle(newTitle) {
        this.title = newTitle;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    filterTasksByStatus(isCompleted) {
        return this.tasks.filter(task => task.isCompleted === isCompleted);
    }
    deleteTasks(task) {
        this.tasks = [];
    }
}

let dailyTask = new TodoList(1, "список дел на день:");
dailyTask.addTask(new Task(1, "сходить на 1 пару в 14:40"));
dailyTask.addTask(new Task(2, "сходить в перекресток за кока-колой"));
dailyTask.addTask(new Task(3, "сделать лабу на завтра"));

console.log("первоначальный список ежедневных задач:");
dailyTask.tasks.forEach(task =>
    console.log(`${task.title} - ${task.isCompleted ? "выполнено" : "не выполнено"}`)
);

let newTask = new Task(4, "сходить в тренажерный зал");
dailyTask.addTask(newTask);

console.log("оновленный список задач:");
dailyTask.tasks.forEach(task =>
    console.log(`${task.title} - ${task.isCompleted ? "выполнено" : "не выполнено"}`)
);

let workingList = new TodoList(2, "какие лабы нужно сделать:");
workingList.addTask(new Task(1, "доделать 11 лабу по СЯП"));
workingList.addTask(new Task(2, "подготовиться к защите 11 и 12 лаб по ООП"));
workingList.addTask(new Task(3, "начать делать 9 лабу по АиСД"));

dailyTask.setListTitle("рутинные дела");

dailyTask.tasks[0].toggleCompletion();
workingList.tasks[1].toggleCompletion();

console.log("задачи первого списка:");
dailyTask.tasks.forEach(task =>
    console.log(`${task.title} - ${task.isCompleted ? "выполнено" : "не выполнено"}`)
);

let completedTasks = dailyTask.filterTasksByStatus(true);
console.log("выполненные задачи из первого списка:");
completedTasks.forEach(task => console.log(task.title));

workingList.deleteTasks();

console.log("задачи второго списка:");
workingList.tasks.forEach(task =>
    console.log(`${task.title} - ${task.isCompleted ? "выполнено" : "не выполнено"}`)
);