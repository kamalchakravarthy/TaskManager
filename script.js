 const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const prioritySelect = document.getElementById("prioritySelect");
const dueDateInput = document.getElementById("dueDateInput");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  const dueDate = dueDateInput.value;

  if (taskText === "") {
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <span class="task-priority">${priority}</span>
    <span class="task-due-date">${dueDate}</span>
    <span class="task-status">Incomplete</span>
    <button class="deleteTask">Delete</button>
  `;
  taskList.appendChild(taskItem);

  taskInput.value = "";
  prioritySelect.value = "high";
  dueDateInput.value = "";

  const deleteButton = taskItem.querySelector(".deleteTask");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });
}
