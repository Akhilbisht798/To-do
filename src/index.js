import Project from './modules/projects'
import task from './modules/task'
import Todolist from './modules/Todolist'
import Storage from './modules/Storage'
import UI from './modules/UI'

localStorage.clear()
Storage.saveTodolist(new Todolist());

Storage.addNewTask("Inbox", "Repl");