/* eslint-disable-next-line */
export class Methods {
  static addTask() {
    let inputTask = ''; let lastIndexTasks; let newTask;
    inputTask = document.getElementById('input-task').value;
    const formTasks = document.getElementById('form-tasks');
    if (inputTask.length > 8 && inputTask.length < 64) {
      lastIndexTasks = String(this.getLocalStorage().length + 1);
      newTask = [{ task_name: inputTask, completed: 'false', index: lastIndexTasks }];
      this.saveLocalStorage(newTask);
      this.showTasks();
      formTasks.reset();
    }
  }

  static removeTask(index) {
    let newData;
    if (index > -1) {
      newData = this.getLocalStorage();
      const sizeData = newData.length;
      newData.splice(index, 1);

      for (let k = index; k < (sizeData - 1); k += 1) {
        newData[k].index = String(k + 1, 10);
      }
      this.updateLocalStorage(newData);
      this.showTasks();
    }
  }

  static showTasks() {
    const containerTasks = document.getElementById('container-tasks');
    containerTasks.innerHTML = '';
    this.getLocalStorage().forEach((task) => {
      let checked = ''; let lineThrough = '';
      let buttonRemoveStatus = 'style="display: none;"'; let buttonMoveStatus = '';
      if (task.completed === 'true') {
        checked = 'checked';
        lineThrough = 'style="text-decoration: line-through;"';
        buttonRemoveStatus = 'style="display: block;"';
        buttonMoveStatus = 'style="display: none;"';
      }
      containerTasks.innerHTML
                  += `<div class="d-flex justify-content-between border border-light py-0 px-3 ">
                          <div class="d-flex">
                              <input type="checkbox" name="complete-checkbox" id="complete-checkbox-${task.index}"
                                      class="my-3 checkbox-input" ${checked}>
                              <p class="m-2 w-100" id="task-name-${task.index}" ${lineThrough}>${task.task_name}</p>
                              <input type="text" name="edit-name" class="form-control px-2 m-1 mx-2 edit-name w-100" id="edit-name-${task.index}" value="${task.task_name}">
                          </div>
                          <div class="d-flex">
                              <button type="button" class="border-0 bg-body button-move" id="button-move-${task.index}" ${buttonMoveStatus}><i class='bx bx-dots-vertical-rounded'></i></button>
                              <button type="button" class="border-0 bg-body button-remove" id="button-remove-${task.index}" ${buttonRemoveStatus}"><i class='bx bx-trash' id="logo-trash-${task.index}"></i></button>
                              <button type="button" class="border-0 bg-body button-edit" id="button-edit-${task.index}"><i class='bx bxs-edit' id="logo-edit-${task.index}"></i></button>
                          </div>
                      </div>`;
    });
  }

  static saveLocalStorage(data) {
    const allTasks = this.getLocalStorage();
    if (allTasks.length !== 0) {
      localStorage.setItem('all_tasks', JSON.stringify(allTasks.concat(data)));
    } else {
      localStorage.setItem('all_tasks', JSON.stringify(data));
    }
  }

  static getLocalStorage = () => {
    if (localStorage.getItem('all_tasks')) {
      return JSON.parse(localStorage.getItem('all_tasks'));
    }
    return [];
  }

  static updateLocalStorage = (data) => {
    localStorage.clear();
    localStorage.setItem('all_tasks', JSON.stringify(data));
  }
}
