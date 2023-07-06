document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var taskNameInput = document.getElementById('taskName');
    var taskDescInput = document.getElementById('taskDesc');

    var taskName = taskNameInput.value;
    var taskDesc = taskDescInput.value;

    var newTask = document.createElement('li');
    newTask.innerHTML = '<span class="task">' + taskName + '</span><br><span class="description">' + taskDesc + '</span>';

    var taskList = document.getElementById('taskList');
    taskList.appendChild(newTask);

    taskNameInput.value = '';
    taskDescInput.value = '';
  });