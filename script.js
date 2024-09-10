



/*const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false); 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    let listItems = listContainer.getElementsByTagName("li");
    for(let i = 0; i < listItems.length; i++){
        listItems[i].addEventListener("click", function(e){
            if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
                saveData();
            } else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                saveData();
            }
        });
        let spans = listItems[i].getElementsByTagName("span");
        for(let j = 0; j < spans.length; j++){
            spans[j].addEventListener("click", function(e){
                e.target.parentElement.remove();
                saveData();
            });
        }
    }
}

showTask();*/





const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
       if(inputBox.value === ''){
        alert("You must write something");
       }
       else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       }
       inputBox.value = "";
       saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false); 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();