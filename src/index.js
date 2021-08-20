/* eslint-disable-next-line */
import { Methods } from './checkbox.js';
/* eslint-disable-next-line */
import style from './style.css';

const containerTasks = document.getElementById('container-tasks');
const buttonAddTask = document.getElementById('button-add-task');

const methods = new Methods();

buttonAddTask.onclick = function add() { methods.addTask(); };
methods.showTasks();

let indexList;
const list = methods.getLocalStorage();

containerTasks.addEventListener('click', (ev) => {
  if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
    if (ev.target.tagName === 'INPUT') {
      const idTask = ev.target.id.replace('complete-checkbox-', '');
      const buttonRemove = document.getElementById(`button-remove-${idTask}`);
      const buttonMove = document.getElementById(`button-move-${idTask}`);
      const taskLabel = document.getElementById(`task-name-${idTask}`);
      indexList = parseInt(idTask, 10);

      if (list) {
        if (list[indexList].completed === 'false') {
          list[indexList].completed = 'true';
          buttonRemove.style.display = 'block';
          buttonMove.style.display = 'none';
          taskLabel.style.textDecoration = 'line-through';
        } else {
          list[indexList].completed = 'false';
          buttonRemove.style.display = 'none';
          buttonMove.style.display = 'block';
          taskLabel.style.textDecoration = 'none';
        }
        methods.updateLocalStorage(list);
      }
    }
  }
}, false);
