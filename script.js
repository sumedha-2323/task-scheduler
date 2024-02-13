const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const dateInput = document.getElementById('dateInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const task = taskInput.value;
    const priority = prioritySelect.value;
    const date = dateInput.value;

    if (task.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('ul');
    taskItem.classList.add('list');
    taskItem.innerHTML = `
        <li>${task}</li>
        <li>Priority: ${priority}</li>
        <li>Deadline: ${date}</li>
        <li style="  background: rgb(34, 184, 34);
        color: white;
        padding: 5px;
        border: none;
        outline: none;
        border-radius: 4px;
        font-size: 15px;
        ">Mark Done</li>
    `;
    taskList.appendChild(taskItem);

    taskInput.value = '';
    prioritySelect.value = 'Top';
    dateInput.value = '';
});