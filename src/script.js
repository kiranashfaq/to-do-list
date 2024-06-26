var addBtn = document.getElementById("add-btn")
var addInput = document.getElementById("add-inp"); // t-d-l
var textInput = document.getElementById("text-inp"); // input box

var editTodo = null

addBtn.addEventListener("click", function() {
    // for empty input 
var emptyInp = textInput.value
    if(emptyInp.length <= 0){
      alert("You must need to write something");
      return false;
    }
    // for editing task 
    if (addBtn.innerHTML === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = emptyInp
        addBtn.innerHTML = "Add-Task"
        textInput.value = ""
    }
    // for adding task 
    else{
var editBtn = `<button class="edit-del" >Edit</button>`;
var delBtn = `<button class="edit-del">delete</button>`;

addInput.innerHTML += `<div class="main-div" id="div" >
<div class="edit-div" id="edit-inp">
${textInput.value}</div>
${editBtn} ${delBtn}</div>`;


addInput.appendChild(div)

textInput.value = "";

 var editInp = document.getElementById("edit-inp");


    }
})
// for del & edit /
const updateTodo = (e)=>{
    if(e.target.innerHTML === "delete"){
        addInput.removeChild(e.target.parentElement)
    }
    if(e.target.innerHTML === "Edit"){
        textInput.value = e.target.previousElementSibling.innerHTML
        textInput.focus()
        addBtn.innerText = "Edit"
        editTodo = e
    }
}
addInput.addEventListener("click", updateTodo)