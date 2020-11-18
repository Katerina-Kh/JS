document.addEventListener("DOMContentLoaded", function () {

    let intField = document.querySelector(".input-text");
    let addBtn = document.querySelector(".button--add");
    let listWrap = document.querySelector(".list-wrap")

    let arrayTasks;

    if (localStorage.tasks) {
        arrayTasks = JSON.parse(localStorage.getItem("tasks"));
        console.log(arrayTasks)
    } else {
        arrayTasks = [];
        console.log(arrayTasks)

    }

    function newTask(taskText) {
        this.taskText = taskText;
        this.status = false;

    }

    let refreshLocalStorage = () => {
        localStorage.setItem("tasks", JSON.stringify(arrayTasks))
    }

    let addNewTask = () => {
        arrayTasks.push(new newTask(intField.value));
        if (intField.value == false){
            alert("Помилка. Поле не заповнено!")
        } else {
        refreshLocalStorage();
        showTasksList();
        intField.value = null;
        }
    }

    let createRow = (elem, index) => {
        return `
             <div class="task-row ${elem.status ? "task-row--checked" : ""}">
                <h3 class="task-title">${elem.taskText}</h3>
                <input class="task-status" type="checkbox" ${elem.status ? "checked" : ""} data-index="${index}"></input>
                <button class="button button--delete data-index="${index}""> Видалити</button>
            </div>
        `;       
    }

    let showTasksList = () => {
        listWrap.innerHTML = "";
        arrayTasks.forEach((elem, index) =>{
            listWrap.innerHTML += createRow(elem, index);
        });

        let taskCheck = document.querySelectorAll(".task-status");
        let deletBtn = document.querySelectorAll(".button--delete")

        taskCheck.forEach(elem => {
            elem.addEventListener("change", checkTask);
        })

        deletBtn.forEach(elem => {
            elem.addEventListener("click", deleteTask);
        })
    };

    function checkTask (){
        arrayTasks[this.dataset.index].status = !arrayTasks[this.dataset.index].status;
        refreshLocalStorage();
        showTasksList();
    };

    function deleteTask() {
arrayTasks.splice(this.dataset.index, 1)
        refreshLocalStorage();
        showTasksList(); 
    }

    showTasksList();

    addBtn.onclick = addNewTask;

    document.addEventListener("keyup", function (evt) {
        if (evt.code == "Enter" || evt.key == "Enter") {
            addNewTask();
        }
    })

});