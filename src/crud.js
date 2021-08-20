import { Methods } from './checkbox.js';

const methods = new Methods();

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
        let list = methods.getLocalStorage();
        indexList = parseInt(idTask, 10);

        if (list != []) {
          if (list[indexList]["completed"] === 'false') {
            list[indexList]["completed"] = 'true';
            buttonRemove.style.display = 'block';
            buttonMove.style.display = 'none';
            taskLabel.style.textDecoration = 'line-through';
          } else {
            list[indexList]["completed"] = 'false';
            buttonRemove.style.display = 'none';
            buttonMove.style.display = 'block';
            taskLabel.style.textDecoration = 'none';
          }
          methods.updateLocalStorage(list);
        }
      }
    }
  }, false);

const deleteTask = containerTasks.addEventListener('click', (ev) => {
    if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
      if (ev.target.tagName === 'I' && ev.target.className === 'bx bx-trash') {
        const idTask = ev.target.id.replace('logo-trash-', '');
        let list = methods.getLocalStorage();
        indexList = parseInt(idTask, 10);

        if (list) {
          if (list[indexList]["completed"] === 'true') {
            methods.removeTask(indexList)
          }
        }
      }
    }
  }, false);

const editTask = containerTasks.addEventListener('click', (ev) => {
    if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
      if (ev.target.tagName === 'I' && ev.target.className === 'bx bxs-edit') {
        const idTask = ev.target.id.replace('logo-edit-', '');
        let list = methods.getLocalStorage();
        document.getElementById("edit-name-"+idTask).style.display = "block";
        document.getElementById("task-name-"+idTask).style.display = "none";
        indexList = parseInt(idTask, 10);

        if (list !== [] && editState) {
          list[idTask]["task_name"] = document.getElementById("edit-name-"+String(idTask)).value;
          document.getElementById("task-name-"+String(idTask)).style.display = "block";
          document.getElementById("edit-name-"+String(idTask)).style.display = "none";
          methods.updateLocalStorage(list);
          methods.showTasks();
          editState = false;
        }
        else {
          editState = true;
        }
      }
    }
  }, false);

const clearFinishedTasks = buttonClear.addEventListener('click', () => {
    let list = methods.getLocalStorage();
    let noFinishedTasks = list.filter(task => task.completed === "false");
    const sizeNotFinishedTasks = noFinishedTasks.length;
    for (let k = 0; k < sizeNotFinishedTasks; k++) {
      noFinishedTasks[k]["index"] = String(k, 10);
    };
    methods.updateLocalStorage(noFinishedTasks);
    methods.showTasks();
  }, false);

export { updateCheckBoxStatus, deleteTask, editTask, clearFinishedTasks }