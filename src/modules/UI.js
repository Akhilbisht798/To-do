import Storage from './Storage';
import Projects from './projects';
import Todolist from './Todolist';

export default class UI {

    static loadProjects() {
        let container = document.querySelector(".container");

        let div = document.createElement('div');
        div.id = "SideBar";
        container.appendChild(div);
        this.UpdateProjectList();

    }

    static MakeProjectItems(project) {

        let div2 = document.createElement('div');
        if (project.projectName() != "Inbox" && project.projectName() != "Today" && project.projectName() != "This Week") {
            div2.classList.add("temp_Projects"); // Can be deleted.
            div2.innerHTML = ` <div class="pname">${project.projectName()}</div>
                                <button class="deletebtn" onclick="UI.DeleteProjectUI(this)" >Delete</button>`
        }
        else {
            div2.innerHTML = project.projectName();
            div2.classList.add('projects');
        }
        return div2;
    }

    static UpdateProjectList() {
        const Todo = (localStorage.key('todolist') === null) ? new Todolist() : Storage.getTodoList();
        let SideBar = document.querySelector('#SideBar');
        SideBar.innerHTML = "";
        SideBar.appendChild(this.CreatePopupBtn());

        Todo.projects.forEach((project) => {
            SideBar.appendChild(this.MakeProjectItems(project));
        })

    }

    static CreatePopupBtn() {

        let btn = document.createElement('div');
        btn.id = "project-btn-div";
        const project_btn = document.createElement('button');
        project_btn.id = "project-add-btn";
        project_btn.innerHTML = "Add Project";
        project_btn.addEventListener("click", UI.projectInputPopup)
        btn.appendChild(project_btn);

        return btn;
    }

    static projectInputPopup() {

        let addbtn = document.getElementById("project-btn-div");
        let div = document.createElement('div');
        div.id = "INput-Project-Pop";
        div.innerHTML = `<input type="text" name="input_Project_Name" id="input-Project-Name">`;
        const delBtn = document.createElement('button');
        delBtn.innerHTML = "Cancel";

        const addBtn = document.createElement('button')
        addBtn.addEventListener('click', UI.createProjectObj);
        addBtn.innerHTML = "ADD";

        div.appendChild(addBtn);
        div.appendChild(delBtn);

        addbtn.appendChild(div);
    }

    static createProjectObj() {

        let text = document.getElementById('input-Project-Name').value;
        console.log(text);
        Storage.saveNewProject(text);
        UI.UpdateProjectList();
    }

    static DeleteProjectUI(elem) {

        let text = elem.target.parentNode.firstChild.innerHTML;
        Storage.StoredeleteProject(text);
        UI.UpdateProjectList();
    }

}