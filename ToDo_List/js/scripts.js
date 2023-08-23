// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

// Add event listeners to the "Add" button and task input for adding tasks
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

// Handle click events on the task list using event delegation
taskList.addEventListener("click", handleTaskListClick);

// Function to add a new task
function addTask() {
    // Get the trimmed task text from the input field
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        return; // If no text, do nothing
    }

    // Create a new task item element
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem); // Add the task item to the list

    taskInput.value = ""; // Clear the input field
}

// Function to create a new task item element
function createTaskItem(taskText) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <p>${taskText}</p>
        <button class="deleteButton">Remove Task</button>
    `;
    return taskItem;
}

// Function to handle click events on the task list (event delegation)
function handleTaskListClick(event) {
    if (event.target.classList.contains("deleteButton")) {
        // Find the closest parent <li> element
        const taskItem = event.target.closest("li");
        if (taskItem) {
            taskItem.classList.add("fade-out"); // Apply fade-out animation
            setTimeout(function() {
                taskList.removeChild(taskItem); // Remove the task item after animation
            }, 250);
        }
    }
}

// Add event listener to the "Clear All" button for clearing all tasks
clearButton.addEventListener("click", clearAllTasks);

// Function to clear all tasks from the list
function clearAllTasks() {
    taskList.innerHTML = ""; // Clearing the whole inner HTML to remove all tasks
}
