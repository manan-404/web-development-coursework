// Task 1: To-do upgrades
// Data model: array of objects { text: string, done: boolean }
let tasks = [
  { text: "Complete Web Engineering lab by this week", done: true },
  { text: "Preperation for interview", done: false },
  { text: "Watch 'petrem and pedro' ", done: false }
];

let currentFilter = "all"; // 'all' | 'active' | 'done'

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const itemCount = document.getElementById("itemCount");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const filterBtns = document.querySelectorAll(".filter-btn");

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === "active") return !task.done;
    if (currentFilter === "done") return task.done;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.done ? " done" : "");

    const leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    // 1. "done" checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      renderTasks();
    });

    // 2. Task text with double-click to edit
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;
    span.title = "Double-click to edit";
    span.addEventListener("dblclick", () => {
      const newText = prompt("Edit task:", task.text);
      if (newText !== null && newText.trim() !== "") {
        task.text = newText.trim();
        renderTasks();
      }
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      tasks = tasks.filter(t => t !== task);
      renderTasks();
    });

    li.appendChild(leftDiv);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });

  // 3. Count: 1 item vs 3 items (pluralization)
  const activeCount = tasks.filter(t => !t.done).length;
  itemCount.textContent = `${activeCount} ${activeCount === 1 ? "item" : "items"} left`;
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ text, done: false });
  taskInput.value = "";
  renderTasks();
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

// 4. All / Active / Done filters
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// 5. "Clear completed" button
clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter(t => !t.done);
  renderTasks();
});

// Initial render
renderTasks();