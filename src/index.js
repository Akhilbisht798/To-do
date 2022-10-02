import Project from './modules/projects'
import task from './modules/task'
import Todolist from './modules/Todolist'
import Storage from './modules/Storage'
import UI from './modules/UI'
import './style/sidebar.css';

Storage.addNewTask("This Week", "Gra");
Storage.addNewTask("Inbox", "THe");
Storage.addNewTask("Inbox", "THee");
Storage.addNewTask("Inbox", "T");
Storage.addNewTask("Inbox", "H");
UI.loadProjects();