const addTodos = document.getElementById("addTodos");
const addTodosBtn = document.getElementById("addTodosBtn");
const todoList = document.getElementById("todoList");

let editTodo = null;

const todos = () => {
    const inputText = addTodos.value.trim();
    if (inputText <= 0) {
        alert("Please Enter Text")
        return;
    }

    if (addTodosBtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addTodosBtn.value = "Add";
        addTodos.value = "";
        return;
    }

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editbtn");
    li.appendChild(editBtn)

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deletebtn");
    li.appendChild(deleteBtn)

    todoList.appendChild(li);
    addTodos.value = "";
}

const updateTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        e.target.parentElement.style.textDecoration = "line-through";
        setTimeout(() => {
            todoList.removeChild(e.target.parentElement);
        }, 1000)
    }

    if (e.target.innerHTML === "Edit") {
        addTodos.value = e.target.previousElementSibling.innerHTML;
        addTodos.focus();
        addTodosBtn.value = "Edit";
        editTodo = e;
    }

}

addTodosBtn.addEventListener("click", todos);
todoList.addEventListener("click", updateTodo);