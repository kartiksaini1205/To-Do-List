// script.js
// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let error = '';

    if (name.length < 3) error += 'Name must be at least 3 characters. ';
    if (!email.includes('@')) error += 'Invalid email format. ';
    if (subject === '') error += 'Subject is required. ';

    if (error) {
        document.getElementById('formError').innerText = error;
    } else {
        document.getElementById('formError').innerText = '';
        alert('Form submitted successfully!');
        this.reset();
    }
});

// To-Do List
function addTask() {
    let taskInput = document.getElementById('todoInput');
    let task = taskInput.value;
    if (task.trim() !== '') {
        let taskItem = document.createElement('div');
        taskItem.className = 'todo-item';
        taskItem.innerHTML = `${task} <button onclick="this.parentElement.remove()">Remove</button>`;
        document.getElementById('todoList').appendChild(taskItem);
        taskInput.value = '';
    }
}