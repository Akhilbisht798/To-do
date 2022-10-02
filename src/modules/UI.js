import Storage from './Storage';
import Projects from './projects';
import Todolist from './Todolist';

export default class UI {

    static curr = "Inbox";

    static loadProjects() {
        let container = document.querySelector(".container");

        let div = document.createElement('div');
        div.id = "SideBar";
        container.appendChild(div);
        this.UpdateProjectList();

        UI.loadTodos();
    }

    static MakeProjectItems(project) {

        let div2 = document.createElement('div');
        if (project.projectName() != "Inbox" && project.projectName() != "Today" && project.projectName() != "This Week") {
            div2.classList.add("temp_Projects"); // Can be deleted.
            div2.innerHTML = ` <div class="pname">${project.projectName()}</div>
                                <button class="deletebtn" > x </button>`
        }
        else {
            div2.innerHTML = project.projectName();
            div2.classList.add('pname');
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

        UI.DeleteProjectUI();
        UI.ClickProject();
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
        let AddButton = document.getElementById("project-add-btn");
        div.id = "INput-Project-Pop";
        div.innerHTML = `<input type="text" name="input_Project_Name" id="input-Project-Name">`;
        const delBtn = document.createElement('button');
        delBtn.addEventListener('click', UI.PopUpCancelBtn)
        delBtn.innerHTML = "Cancel";

        const addBtn = document.createElement('button')
        addBtn.addEventListener('click', UI.createProjectObj);
        addBtn.innerHTML = "Add";

        div.appendChild(addBtn);
        div.appendChild(delBtn);
        AddButton.disabled = true;
        addbtn.appendChild(div);
    }

    static createProjectObj() {

        let text = document.getElementById('input-Project-Name').value;
        if (text.length === 0) {
            return;
        }
        Storage.saveNewProject(text);
        UI.UpdateProjectList();
    }

    static DeleteProjectUI() {

        let deletebtn = document.querySelectorAll('.deletebtn');
        deletebtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                let parent = e.target.parentNode.children;
                let text = parent[0].innerHTML;
                Storage.StoredeleteProject(text);
                UI.UpdateProjectList();
            })
        })
    }

    static PopUpCancelBtn() {
        let AddButton = document.getElementById("project-add-btn");
        let div = document.getElementById("INput-Project-Pop");
        div.remove();
        AddButton.disabled = false;
    }

    static loadTodos() {
        let div = document.createElement('div');
        div.id = "Todos";
        let container = document.querySelector(".container");
        container.appendChild(div);
    }

    static ClickProject() {
        let pname = document.querySelectorAll('.pname');
        pname.forEach((p) => {
            p.addEventListener('click', (e) => {
                let text = e.target.innerHTML;
                UI.curr = text;
                UI.GetTodos(text);
            })
        })
    }

    static GetTodos(text) {
        let Todos = document.getElementById('Todos');
        Todos.innerHTML = "";
        const Todo = Storage.getTodoList();
        const p = Todo.findProject(text);
        p.task.forEach(t => {
            UI.CreateTodo(t);
        });
        UI.deleteTodo();
    }

    static CreateTodo(todo) {
        let Todos = document.getElementById('Todos');
        let div = document.createElement('div');
        div.classList.add("Indiviual_todo")
        div.innerHTML = `<div class="Todo-name">${todo.taskName()}</div>
        <input type="checkbox" class="Is-Complete">`
        Todos.appendChild(div);
    }

    static deleteTodo() {
        let Is_complete = document.querySelectorAll('.Is-Complete')
        Is_complete.forEach((c) => {
            c.addEventListener('click', (e) => {
                let parent = e.target.parentNode.children;
                let text = parent[0].innerHTML;
                Storage.deleteTask(UI.curr, text);
                UI.GetTodos(UI.curr);
            })
        })
    }

    // Create a Add Todo btn.
    // figure out time and date.
    //Make popup for input task.
    //Make popup for onclicking tasks to get imformation.
    static AddTaskBtn() {
        let Todos = document.getElementById('Todos');
        let btn = document.createElement('button');
        btn.innerHTML = "New Task";
        btn.addEventListener('click', UI.NewTaskPopUPOpen);
        Todos.appendChild(btn);
    }

    static POPUPNewTask() {
        let div = document.createElement('div');
        div.classList.add("modal-container");
        div.innerHTML = `
        <div class="modal">
        <h1>thIS IS Awesome 😎</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolore fuga totam, sunt vitae inventore optio
            saepe suscipit expedita omnis?</p>
        </div>`;
        return div;
    }

    static NewTaskPopUPOpen() {
        let Todos = document.getElementById('Todos');
        Todos.appendChild(UI.POPUPNewTask())
    }
}