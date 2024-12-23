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
        this.render();
    }

    filterTasksByStatus(isCompleted) {
        return this.tasks.filter(task => task.isCompleted === isCompleted);
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.render();
    }

    render(filteredTasks = null) {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        const tasksToRender = filteredTasks || this.tasks;

        tasksToRender.forEach(task => {
            const li = document.createElement("li");
            li.className = task.isCompleted ? "completed" : "";
            li.innerHTML = `
                <span>${task.title}</span>
                <div>
                    <input type="checkbox" ${task.isCompleted ? "checked" : ""} onclick="toggleTaskCompletion(${task.id})">
                    <button class="edit" onclick="editTask(${task.id})">Редактировать</button>
                    <button onclick="deleteTask(${task.id})">Удалить</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }
}

let todoList = new TodoList(1, "Список дел");

document.getElementById("addTaskButton").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const title = taskInput.value.trim();
    if (title) {
        const newTask = new Task(Date.now(), title);
        todoList.addTask(newTask);
        taskInput.value = "";
    }
});

document.getElementById("showAll").addEventListener("click", () => {
    todoList.render();
});

document.getElementById("showCompleted").addEventListener("click", () => {
    const completedTasks = todoList.filterTasksByStatus(true);
    todoList.render(completedTasks);
});

document.getElementById("showIncomplete").addEventListener("click", () => {
    const incompleteTasks = todoList.filterTasksByStatus(false);
    todoList.render(incompleteTasks);
});

function toggleTaskCompletion(taskId) {
    const task = todoList.tasks.find(task => task.id === taskId);
    if (task) {
        task.toggleCompletion();
        todoList.render();
    }
}

function deleteTask(taskId) {
    todoList.deleteTask(taskId);
}

function editTask(taskId) {
    const task = todoList.tasks.find(task => task.id === taskId);
    if (task) {
        const newTitle = prompt("Введите новое название задачи:", task.title);
        if (newTitle !== null && newTitle.trim() !== "") {
            task.setTitle(newTitle.trim());
            todoList.render();
        }
    }
}
