let inputBox = document.getElementById('inputBox');
let container = document.getElementById('items');

function addTask(){
    if(inputBox.value === ''){
        alert("Please write something!")
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        container.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

container.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem('data', container.innerHTML);
}

function showList(){
    container.innerHTML = localStorage.getItem("data");
}

showList();