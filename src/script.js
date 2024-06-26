var addBtn = document.getElementById("add-btn")
var addInput = document.getElementById("add-inp"); // input box
var textInput = document.getElementById("text-inp"); // to do list



addBtn.addEventListener("click", function() {
    // for empty input 
var emptyInp = textInput.value
    if(emptyInp.length <= 0){
      alert("You must need to write something");
      return false;
    }
    // for adding task 
var editBtn = `<button class="edit-del" id="edit">Edit</button>`;
var delBtn = `<button class="edit-del" id="del">delete</button>`;

addInput.innerHTML += `<div class="main-div" id="div" >
<div class="edit-div" id="edit-inp">
${textInput.value}</div>
${editBtn} ${delBtn}</div>`;

// del button 

var del = document.getElementById("del");
var div = document.getElementById("div");
// edit btn 
var edit = document.getElementById("edit");
var editInp = document.getElementById("edit-inp");

// del functionality 
del.addEventListener("click", function () {
    div.innerHTML = "";


});
// edit functionality 
edit.addEventListener("click" , function(){
    editInp.innerHTML = `<input class="new-inp" type="text"  value="${textInput.value}">`
})


})
