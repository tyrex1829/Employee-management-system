const enteredName = document.querySelector("#name");
const addBtn = document.querySelector("#submit-btn");
const ul = document.querySelector("#employeeList");

function addEmployee(){
    if(enteredName.value !== ""){
        const li = document.createElement("li");
        const removeBtn = document.createElement("button");
        li.textContent = enteredName.value;
        removeBtn.textContent = "Remove";
        li.append(removeBtn)
        ul.append(li);
        enteredName.value = "";

        removeBtn.addEventListener("click", () => {
            li.parentNode.removeChild(li);
        })
    }
    else{
        alert("Please enter a name");
    }
}