
import Tasks from "./task";

export default class Projects {
    constructor(name) {
        this.name = name;
        this.task = [];
    }

    setTasks(tasks) {
        this.task = tasks
    }

    push_task(task) {
        this.task.push(new Tasks(task));
    }

    remove_task(index) {
        this.task.splice(index, 1);
    }

    projectName() {
        return this.name;
    }

    tasks() {
        return this.task;
    }
}