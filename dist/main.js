(()=>{"use strict";class t{constructor(t,e="No date"){this.Name=t,this.Complete=!1,this.date=e}taskName(){return this.Name}isCompleted(){this.Complete=!0}setDescription(t){this.Description=t}setDate(t){this.Date=t}}class e{constructor(t){this.name=t,this.task=[]}setTasks(t){this.task=t}push_task(e){this.task.find((t=>t.taskName()===e))||this.task.push(new t(e))}remove_task(t){let e=this.task.find((e=>e.taskName()===t)),s=this.task.indexOf(e);this.task.splice(s,1)}projectName(){return this.name}tasks(){return this.task}}class s{constructor(){this.projects=[],this.projects.push(new e("Inbox")),this.projects.push(new e("Today")),this.projects.push(new e("This Week"))}setProject(t){this.projects=t}addProject(t){if(this.projects.find((e=>e.projectName()===t)))return;let s=new e(t);return this.projects.push(s),s}findProject(t){return this.projects.find((e=>e.projectName()===t))}DeleteProject(t){if("Inbox"===t||"Today"===t||"This Week"===t)return;const e=this.projects.find((e=>e.projectName()===t));let s=this.projects.indexOf(e);this.projects.splice(s,1)}AllProjects(){return this.projects}}class o{static saveTodolist(t){localStorage.setItem("todolist",JSON.stringify(t))}static getTodoList(){const o=Object.assign(new s,JSON.parse(localStorage.getItem("todolist")));return o.setProject(o.AllProjects().map((t=>Object.assign(new e,t)))),o.AllProjects().forEach((e=>e.setTasks(e.tasks().map((e=>Object.assign(new t,e)))))),o}static saveNewProject(t){const e=o.getTodoList();e.addProject(t),o.saveTodolist(e)}static StoredeleteProject(t){const e=o.getTodoList();e.DeleteProject(t),o.saveTodolist(e)}static addNewTask(t,e){const s=o.getTodoList();s.findProject(t).push_task(e),localStorage.clear(),o.saveTodolist(s)}static deleteTask(t,e){const s=o.getTodoList();s.findProject(t).remove_task(e),o.saveTodolist(s)}}class c{static loadProjects(){let t=document.querySelector(".container"),e=document.createElement("div");e.id="SideBar",t.appendChild(e),this.UpdateProjectList()}static MakeProjectItems(t){let e=document.createElement("div");return"Inbox"!=t.projectName()&&"Today"!=t.projectName()&&"This Week"!=t.projectName()?(e.classList.add("temp_Projects"),e.innerHTML=` <div class="pname">${t.projectName()}</div>\n                                <button class="deletebtn" onclick="UI.DeleteProjectUI(this)" >Delete</button>`):(e.innerHTML=t.projectName(),e.classList.add("projects")),e}static UpdateProjectList(){const t=null===localStorage.key("todolist")?new s:o.getTodoList();let e=document.querySelector("#SideBar");e.innerHTML="",e.appendChild(this.CreatePopupBtn()),t.projects.forEach((t=>{e.appendChild(this.MakeProjectItems(t))}))}static CreatePopupBtn(){let t=document.createElement("div");t.id="project-btn-div";const e=document.createElement("button");return e.id="project-add-btn",e.innerHTML="Add Project",e.addEventListener("click",c.projectInputPopup),t.appendChild(e),t}static projectInputPopup(){let t=document.getElementById("project-btn-div"),e=document.createElement("div");e.id="INput-Project-Pop",e.innerHTML='<input type="text" name="input_Project_Name" id="input-Project-Name">';const s=document.createElement("button");s.innerHTML="Cancel";const o=document.createElement("button");o.addEventListener("click",c.createProjectObj),o.innerHTML="ADD",e.appendChild(o),e.appendChild(s),t.appendChild(e)}static createProjectObj(){let t=document.getElementById("input-Project-Name").value;console.log(t),o.saveNewProject(t),c.UpdateProjectList()}static DeleteProjectUI(t){let e=t.target.parentNode.firstChild.innerHTML;o.StoredeleteProject(e),c.UpdateProjectList()}}c.loadProjects()})();