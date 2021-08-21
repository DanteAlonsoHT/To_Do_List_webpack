import { Methods } from './checkbox';

const containerTasks = document.getElementById('container-tasks');
const buttonClear = document.getElementById('button-clear');

let indexList; let editState = false;

const updateCheckBoxStatus = containerTasks.addEventListener('click', (ev) => {
  if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
    if (ev.target.className === 'my-3 checkbox-input') {
      const idTask = ev.target.id.replace('complete-checkbox-', '');
      const buttonRemove = document.getElementById(`button-remove-${idTask}`);
      const buttonMove = document.getElementById(`button-move-${idTask}`);
      const taskLabel = document.getElementById(`task-name-${idTask}`);
      const list = Methods.getLocalStorage();
      indexList = parseInt(idTask, 10) - 1;

      if (list !== []) {
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
        Methods.updateLocalStorage(list);
      }
    }
  }
}, false);

const deleteTask = containerTasks.addEventListener('click', (ev) => {
  if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
    if (ev.target.tagName === 'I' && ev.target.className === 'bx bx-trash') {
      const idTask = ev.target.id.replace('logo-trash-', '');
      const list = Methods.getLocalStorage();
      indexList = parseInt(idTask, 10) - 1;

      if (list) {
        if (list[indexList].completed === 'true') {
          Methods.removeTask(indexList);
        }
      }
    }
  }
}, false);

const editTask = containerTasks.addEventListener('click', (ev) => {
  if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
    if (ev.target.tagName === 'I' && ev.target.className === 'bx bxs-edit') {
      const idTask = ev.target.id.replace('logo-edit-', '');
      const list = Methods.getLocalStorage();
      document.getElementById(`edit-name-${idTask}`).style.display = 'block';
      document.getElementById(`task-name-${idTask}`).style.display = 'none';
      indexList = parseInt(idTask, 10) - 1;

      if (list !== [] && editState) {
        list[indexList].task_name = document.getElementById(`edit-name-${String(idTask)}`).value;
        document.getElementById(`task-name-${String(idTask)}`).style.display = 'block';
        document.getElementById(`edit-name-${String(idTask)}`).style.display = 'none';
        Methods.updateLocalStorage(list);
        Methods.showTasks();
        editState = false;
      } else {
        editState = true;
      }
    }
  }
}, false);

const clearFinishedTasks = buttonClear.addEventListener('click', () => {
  const list = Methods.getLocalStorage();
  const noFinishedTasks = list.filter((task) => task.completed === 'false');
  const sizeNotFinishedTasks = noFinishedTasks.length;
  for (let k = 0; k < sizeNotFinishedTasks; k += 1) {
    noFinishedTasks[k].index = String(k + 1, 10);
  }
  Methods.updateLocalStorage(noFinishedTasks);
  Methods.showTasks();
}, false);

export {
  updateCheckBoxStatus, deleteTask, editTask, clearFinishedTasks,
};