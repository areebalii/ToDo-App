let inputEl = document.querySelector("#inputTask")
let addButtonEl = document.querySelector(".addTask")
let ulEl = document.querySelector(".tasks")

addButtonEl.addEventListener("click", () => {
  addToDo();
})

inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addToDo();
  }
})
function addToDo(taskText) {
  const task = taskText || inputEl.value.trim();
  if (task === "") {
    return alert("Please enter a task")
  }
  let liEl = document.createElement("li")
  liEl.textContent = task;
  let spanEl = document.createElement("span")
  spanEl.innerHTML = `<i class="fa-solid fa-trash delete"></i>`
  liEl.appendChild(spanEl)
  spanEl.addEventListener("click", () => {
    liEl.remove();
    deleteItemsFromLocalStorage(taskText);
  })
  ulEl.appendChild(liEl)
  
  if(!taskText) {
    saveToLocalStorage(task);
    inputEl.value = "";
  }
}

function saveToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

LoadTasksFromLocalStorage();
function LoadTasksFromLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addToDo(task));
}

function deleteItemsFromLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}