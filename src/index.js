
import Storage from './modules/Storage'
import UI from './modules/UI'
import './style/sidebar.css';
import './style/popupTask.css';

Storage.addNewTask("This Week", "Gra");
Storage.addNewTask("Inbox", "THe");
Storage.addNewTask("Inbox", "THee");
Storage.addNewTask("Inbox", "T");
Storage.addNewTask("Inbox", "H");
UI.loadProjects();