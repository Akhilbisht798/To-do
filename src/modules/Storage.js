
import Todolist from "./Todolist";
import Project from "./projects";
import Task from "./task";


export default class Storage {
    static saveTodolist(data) {
        localStorage.setItem("todolist", JSON.stringify(data))
    }

    static getTodoList() {
        const todoList = Object.assign(
            new Todolist(),
            JSON.parse(localStorage.getItem('todolist'))
        )

        todoList.setProject(
            todoList
                .AllProjects()
                .map((project) => Object.assign(new Project(), project))
        )

        todoList
            .AllProjects()
            .forEach((project) =>
                project.setTasks(
                    project.tasks().map((task) => Object.assign(new Task(), task))
                )
            )

        return todoList
    }

    static saveNewProject(project) {
        const Todo = Storage.getTodoList();
        Todo.addProject(project);
        Storage.saveTodolist(Todo);
    }

    static StoredeleteProject(projectName) {
        const Todo = Storage.getTodoList();
        Todo.DeleteProject(projectName);
        Storage.saveTodolist(Todo);
    }

    static addNewTask(project, Task) {
        const Todo = Storage.getTodoList();
        Todo.findProject(project).push_task(Task);
        localStorage.clear();
        Storage.saveTodolist(Todo);
    }

    static deleteTask(project, taskName) {
        const Todo = Storage.getTodoList();
        Todo.findProject(project).remove_task(taskName);
        Storage.saveTodolist(Todo);
    }
}