import Project from './projects'

export default class Todolist {
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Inbox"));
        this.projects.push(new Project("Today"));
        this.projects.push(new Project("This Week"));
    }

    setProject(project) {
        this.projects = project;
    }

    addProject(name) {
        if (this.projects.find((item) => item.projectName() === name)) return;
        let newProject = new Project(name);
        this.projects.push(newProject);
        return newProject;
    }

    findProject(name) {
        return this.projects.find((item) => item.projectName() === name);
    }

    DeleteProject(name) {
        if (name === "Inbox" || name === "Today" || name === "This Week") return;
        const ele = this.projects.find((element) => element.projectName() === name);
        let index = this.projects.indexOf(ele);
        this.projects.splice(index, 1);
    }

    AllProjects() {
        return this.projects;
    }
}