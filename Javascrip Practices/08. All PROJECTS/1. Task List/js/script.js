// Define UI Element

let form = document.querySelector("#Task_Form");
let tasklist = document.querySelector("ul");
let clearbtn = document.querySelector("#Clear_Task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#New_Task");


// Define event listeners
form.addEventListener('submit', addTask);
tasklist.addEventListener("click", removeTask);
clearbtn.addEventListener("click",clearTask);
filter.addEventListener("keyup", filterTask);
document.addEventListener("DOMContentLoaded", getTasks)

// Define Functions

function addTask(e){
    if(taskInput.value ===""){
        alert('Add a Task')
    }else{
        // Create li Element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + ""));
        let link = document.createElement("a");
        link.setAttribute("href","#");
        link.innerHTML = " x";
        li.appendChild(link);
        tasklist.appendChild(li);

        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = "";
        
    }
    e.preventDefault();
};
// Remove Task
function removeTask(e){
    if(e.target.hasAttribute('href')){
        if (confirm("Are You Sure?")){
            let ele = e.target.parentElement;
            ele.remove();
            removeFromLS(ele);
        };
        
    };

};
//Clear Task

function clearTask(e){
    // tasklist.innerHTML= "";

    // Another Faster Waya
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    };
    localStorage.clear()
};

// Filter

function filterTask(e){
    let text = e.target.value.toLowerCase();

    document.querySelectorAll("li").forEach(task=>{
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text)!=-1){
            task.style.display = "block"
        }else{
            task.style.display = "none"
        };
    });

};

// Store In Local Storage

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem("tasks")=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    };
    tasks.push(task);

    localStorage.setItem("tasks",JSON.stringify(tasks));
};


// load Local Storage Data

function getTasks(){
    if(localStorage.getItem("tasks")=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    };
    tasks.forEach(task=>{
    let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + ""));
        let link = document.createElement("a");
        link.setAttribute("href","#");
        link.innerHTML = " x";
        li.appendChild(link);
        tasklist.appendChild(li);
    })
};

// Remove Local Storage

function removeFromLS(taskItem){
    let tasks;
    if(localStorage.getItem("tasks")=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    };
    let li= taskItem;
    li.removeChild(li.lastChild);

    tasks.forEach(( task, index)=>{
        if(li.textContent.trim()=== task){
            tasks.splice(index, 1);
        }

    });
    localStorage.setItem("tasks", JSON.stringify(tasks))
}