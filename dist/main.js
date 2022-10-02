(()=>{"use strict";var e={220:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nhead {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n}\r\n\r\n#SideBar {\r\n    font-size: 1.2em;\r\n    padding: 1.3em;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1.5em;\r\n    flex-direction: column;\r\n}\r\n\r\n.temp_Projects {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    gap: 1.4em;\r\n}\r\n\r\n.deletebtn {\r\n    background: none;\r\n    outline: inherit;\r\n    border: none;\r\n    cursor: pointer;\r\n    font-size: 1.3em;\r\n    color: rgb(255, 0, 0);\r\n    font-weight: bold;\r\n}\r\n\r\n#project-add-btn {\r\n    padding: 0.9em;\r\n    background: none;\r\n    cursor: pointer;\r\n    border-radius: 1.2em;\r\n    font-size: 0.9em;\r\n    border: 2px solid black;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    transition: all 0.6s;\r\n}\r\n\r\n#project-add-btn:hover {\r\n    background-color: yellow;\r\n}",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],d=r.base?i[0]+r.base:i[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=n(a[s]);t[c].references--}for(var i=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e,t="No date"){this.Name=e,this.Complete=!1,this.date=t}taskName(){return this.Name}isCompleted(){this.Complete=!0}setDescription(e){this.Description=e}setDate(e){this.Date=e}}class t{constructor(e){this.name=e,this.task=[]}setTasks(e){this.task=e}push_task(t){this.task.find((e=>e.taskName()===t))||this.task.push(new e(t))}remove_task(e){let t=this.task.find((t=>t.taskName()===e)),n=this.task.indexOf(t);this.task.splice(n,1)}projectName(){return this.name}tasks(){return this.task}}class r{constructor(){this.projects=[],this.projects.push(new t("Inbox")),this.projects.push(new t("Today")),this.projects.push(new t("This Week"))}setProject(e){this.projects=e}addProject(e){if(this.projects.find((t=>t.projectName()===e)))return;let n=new t(e);return this.projects.push(n),n}findProject(e){return this.projects.find((t=>t.projectName()===e))}DeleteProject(e){if("Inbox"===e||"Today"===e||"This Week"===e)return;const t=this.projects.find((t=>t.projectName()===e));let n=this.projects.indexOf(t);this.projects.splice(n,1)}AllProjects(){return this.projects}}class o{static saveTodolist(e){localStorage.setItem("todolist",JSON.stringify(e))}static getTodoList(){const n=Object.assign(new r,JSON.parse(localStorage.getItem("todolist")));return n.setProject(n.AllProjects().map((e=>Object.assign(new t,e)))),n.AllProjects().forEach((t=>t.setTasks(t.tasks().map((t=>Object.assign(new e,t)))))),n}static saveNewProject(e){const t=o.getTodoList();t.addProject(e),o.saveTodolist(t)}static StoredeleteProject(e){const t=o.getTodoList();t.DeleteProject(e),o.saveTodolist(t)}static addNewTask(e,t){const n=o.getTodoList();n.findProject(e).push_task(t),localStorage.clear(),o.saveTodolist(n)}static deleteTask(e,t){const n=o.getTodoList();n.findProject(e).remove_task(t),o.saveTodolist(n)}}class a{static curr;static loadProjects(){let e=document.querySelector(".container"),t=document.createElement("div");t.id="SideBar",e.appendChild(t),this.UpdateProjectList(),a.loadTodos()}static MakeProjectItems(e){let t=document.createElement("div");return"Inbox"!=e.projectName()&&"Today"!=e.projectName()&&"This Week"!=e.projectName()?(t.classList.add("temp_Projects"),t.innerHTML=` <div class="pname">${e.projectName()}</div>\n                                <button class="deletebtn" > x </button>`):(t.innerHTML=e.projectName(),t.classList.add("pname")),t}static UpdateProjectList(){const e=null===localStorage.key("todolist")?new r:o.getTodoList();let t=document.querySelector("#SideBar");t.innerHTML="",t.appendChild(this.CreatePopupBtn()),e.projects.forEach((e=>{t.appendChild(this.MakeProjectItems(e))})),a.DeleteProjectUI(),a.ClickProject()}static CreatePopupBtn(){let e=document.createElement("div");e.id="project-btn-div";const t=document.createElement("button");return t.id="project-add-btn",t.innerHTML="Add Project",t.addEventListener("click",a.projectInputPopup),e.appendChild(t),e}static projectInputPopup(){let e=document.getElementById("project-btn-div"),t=document.createElement("div"),n=document.getElementById("project-add-btn");t.id="INput-Project-Pop",t.innerHTML='<input type="text" name="input_Project_Name" id="input-Project-Name">';const r=document.createElement("button");r.addEventListener("click",a.PopUpCancelBtn),r.innerHTML="Cancel";const o=document.createElement("button");o.addEventListener("click",a.createProjectObj),o.innerHTML="Add",t.appendChild(o),t.appendChild(r),n.disabled=!0,e.appendChild(t)}static createProjectObj(){let e=document.getElementById("input-Project-Name").value;0!==e.length&&(o.saveNewProject(e),a.UpdateProjectList())}static DeleteProjectUI(){document.querySelectorAll(".deletebtn").forEach((e=>{e.addEventListener("click",(e=>{let t=e.target.parentNode.children[0].innerHTML;o.StoredeleteProject(t),a.UpdateProjectList()}))}))}static PopUpCancelBtn(){let e=document.getElementById("project-add-btn");document.getElementById("INput-Project-Pop").remove(),e.disabled=!1}static loadTodos(){let e=document.createElement("div");e.id="Todos",document.querySelector(".container").appendChild(e)}static ClickProject(){document.querySelectorAll(".pname").forEach((e=>{e.addEventListener("click",(e=>{let t=e.target.innerHTML;a.curr=t,a.GetTodos(t)}))}))}static GetTodos(e){document.getElementById("Todos").innerHTML="",o.getTodoList().findProject(e).task.forEach((e=>{a.CreateTodo(e)})),a.deleteTodo()}static CreateTodo(e){let t=document.getElementById("Todos"),n=document.createElement("div");n.classList.add("Indiviual_todo"),n.innerHTML=`<div class="Todo-name">${e.taskName()}</div>\n        <input type="checkbox" class="Is-Complete">`,t.appendChild(n)}static deleteTodo(){document.querySelectorAll(".Is-Complete").forEach((e=>{e.addEventListener("click",(e=>{let t=e.target.parentNode.children[0].innerHTML;o.deleteTask(a.curr,t),a.GetTodos(a.curr)}))}))}}var s=n(379),c=n.n(s),i=n(795),d=n.n(i),l=n(569),p=n.n(l),u=n(565),m=n.n(u),h=n(216),f=n.n(h),v=n(589),j=n.n(v),T=n(220),b={};b.styleTagTransform=j(),b.setAttributes=m(),b.insert=p().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=f(),c()(T.Z,b),T.Z&&T.Z.locals&&T.Z.locals,o.addNewTask("This Week","Gra"),o.addNewTask("Inbox","THe"),o.addNewTask("Inbox","THee"),o.addNewTask("Inbox","T"),o.addNewTask("Inbox","H"),a.loadProjects()})()})();