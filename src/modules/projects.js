
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
        if (this.task.find((item) => item.taskName() === task)) return;
        const t = new Tasks(task);
        t.BelongTo(this.name);
        this.task.push(t);
    }

    remove_task(name) {
        let Task = this.task.find((item) => item.taskName() === name)
        let index = this.task.indexOf(Task);
        this.task.splice(index, 1);
    }

    projectName() {
        return this.name;
    }

    tasks() {
        return this.task;
    }
}