import Storage from './Storage';
import Projects from './projects';
import Todolist from './Todolist';

//TODO: Making complete working UI.
export default class UI {

    static loadProjects() {
        //TODO: Later On it load from local storage Rather than creating a new object.
        let container = document.querySelector('.container');

        const Todo = new Todolist();

        let div = document.createElement('div');
        div.classList.add("Sidebar");


        Todo.projects.forEach((project) => {
            let div2 = document.createElement('div');
            div2.innerHTML = project.projectName()
            div.appendChild(div2);
        })

        container.appendChild(div);
    }

    static addprojectUI(project) {
        let Sidebar = document.querySelector('.Sidebar');

        let div = document.createElement('div');
        div.innerHTML = project.projectName();
        Sidebar.appendChild(div);
    }

}