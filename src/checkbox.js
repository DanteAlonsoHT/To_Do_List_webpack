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
}