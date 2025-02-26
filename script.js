const tasks = [];

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('nama-tugas').value;
    const taskDescription = document.getElementById('deskripsi-tugas').value;
    const taskDeadline = document.getElementById('deadline-tugas').value;

    const task = {
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline
    };

    tasks.push(task);
    displayTasks();
    this.reset();
});

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'box';
        taskDiv.innerHTML = `
            <p> Nama Tugas: ${task.name} </p>
            <p> Deskripsi: ${task.description} </p>
            <p> Deadline: ${task.deadline} </p>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskDiv);
    });
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('nama-tugas').value = task.name;
    document.getElementById('deskripsi-tugas').value = task.description;
    document.getElementById('deadline-tugas').value = task.deadline;
    deleteTask(index);
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
