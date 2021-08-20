import { Methods } from './checkbox.js';

const containerTasks = document.getElementById('container-tasks');
const buttonAddTask = document.getElementById('button-add-task');

const methods = new Methods();

buttonAddTask.onclick = function add() { methods.addTask(); };
methods.showTasks();