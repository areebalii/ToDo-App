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
function addToDo() {
  if (inputEl.value === "") {
    return alert("Please enter a task")
  }
  let liEl = document.createElement("li")
  liEl.textContent = inputEl.value;
  let spanEl = document.createElement("span")
  spanEl.innerHTML = `<i class="fa-solid fa-trash delete"></i>`
  liEl.appendChild(spanEl)
  spanEl.addEventListener("click", () => {
    liEl.remove();
  })
  ulEl.appendChild(liEl)

  inputEl.value = "";
}