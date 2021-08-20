import { Methods } from './checkbox.js';

const containerTasks = document.getElementById('container-tasks');
const buttonAddTask = document.getElementById('button-add-task');

const methods = new Methods();

buttonAddTask.onclick = function add() { methods.addTask(); };
methods.showTasks();

let list; let indexList;
list = methods.getLocalStorage();

containerTasks.addEventListener('click', (ev) => {
  if (ev.target != null && ev.target != 'NaN' && ev.target != '') {
      if (ev.target.tagName === 'INPUT') {
        let idTask = ev.target.id.replace("complete-checkbox-","");
        let buttonRemove = document.getElementById("button-remove-"+idTask);
        let buttonMove = document.getElementById("button-move-"+idTask);
        let taskLabel = document.getElementById("task-name-"+idTask);
        indexList = parseInt(idTask);
        
        if (list) {
            if (list[indexList]['completed'] === "false") {
                list[indexList]['completed'] = "true";
                buttonRemove.style.display = "block";
                buttonMove.style.display = "none";
                taskLabel.style.textDecoration = "line-through";
            }
            else {
                list[indexList]['completed'] = "false";
                buttonRemove.style.display = "none"
                buttonMove.style.display = "block"
                taskLabel.style.textDecoration = "none";
            }
            methods.updateLocalStorage(list);
        }
      }
    };
  }, false);
  