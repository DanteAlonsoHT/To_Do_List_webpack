export class Methods {
    addTask() {
      inputTask = document.getElementById('input-task').value;
      let inputTask = ''; let lastIndexTasks; let newTask;
      const formTasks = document.getElementById('form-tasks');
      if (inputTask.length > 8 && inputTask.length < 32) {
          //newTask = [[inputTask, 'false']];
          lastIndexTasks = String(this.getLocalStorage().length)
          newTask = [{ task_name: inputTask, completed: 'false', index: lastIndexTasks }];
          this.saveLocalStorage(newTask);
          this.showTasks();
          formTasks.reset();
      }
    }

    removeTask(index) {
        let newData; 
        if (index > -1) {
          newData = this.getLocalStorage();
          newData.splice(index, 1);
          this.updateLocalStorage(newData);
          this.showTasks();
        }
    }

    showTasks() {
        const containerTasks = document.getElementById('container-tasks');
        containerTasks.innerHTML = '';
        this.getLocalStorage().forEach((task, index) => {
            let checked = ''; let lineThrough = '';
            let buttonRemoveStatus = 'style="display: none;"'; let buttonMoveStatus = "";
            if (task['completed'] == "true") {
                checked = 'checked';
                lineThrough = 'style="text-decoration: line-through;"'
                buttonRemoveStatus = 'style="display: block;"'
                buttonMoveStatus = 'style="display: none;"'
            }
            containerTasks.innerHTML
                += `<div class="d-flex justify-content-between border border-light py-0 px-3 ">
                        <div class="d-flex">
                            <input type="checkbox" name="complete-checkbox" id="complete-checkbox-${index}"
                                    class="my-3" ${checked}>
                            <p class="m-2" id="task-name-${index}" ${lineThrough}>${task['task_name']}</p>
                        </div>
                        <button type="button" class="border-0 bg-body button-move" id="button-move-${index}" ${buttonMoveStatus}><i class='bx bx-dots-vertical-rounded'></i></button>
                        <button type="button" class="border-0 bg-body button-remove" id="button-remove-${index}" ${buttonRemoveStatus} onclick="methods.removeTask(${index})"><i class='bx bx-trash'></i></button>
                    </div>`;
        });
    }

    saveLocalStorage(data) {
        let allTasks;
        allTasks = this.getLocalStorage();
        if (allTasks.length !== 0) {
          localStorage.setItem('all_tasks', JSON.stringify(allTasks.concat(data)));
        } else {
          localStorage.setItem('all_tasks', JSON.stringify(data));
        }
    }

    getLocalStorage = () => {
        if (localStorage.getItem('all_tasks')) {
          return JSON.parse(localStorage.getItem('all_tasks'));
        }
        else {
            return [];
        }
    }
    
}