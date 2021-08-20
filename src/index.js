/* eslint-disable-next-line */
import { Methods } from './checkbox.js';
import { updateCheckBoxStatus, deleteTask, editTask, clearFinishedTasks } from './crud.js';
/* eslint-disable-next-line */
import style from './style.css';

const buttonAddTask = document.getElementById('button-add-task');

const methods = new Methods();

window.onload = function windowReady() {
  buttonAddTask.onclick = function add() { methods.addTask(); };
  methods.showTasks();

  updateCheckBoxStatus;
  deleteTask;
  editTask;
  clearFinishedTasks;
};