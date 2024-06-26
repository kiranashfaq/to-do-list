var addBtn = document.getElementById("add-btn")
var addInput = document.getElementById("add-inp");
var textInput = document.getElementById("text-inp");



addBtn.addEventListener("click", function() {
    // input.innerHTML += `<div class="exist-div"><input class="text-inp" disabled ${textInput.value}> <button class="edit">Edit</button> <button class="edit">delete</button></div>`
var editBtn = `<button class="edit-del" id="edit">Edit</button>`;
var delBtn = `<button class="edit-del" id="del">delete</button>`;
addInput.innerHTML += `<div class="main-div" id="div" ><div class="edit-div" id="edit-inp">${textInput.value}</div>${editBtn} ${delBtn}</div>`;
// input.innerHTML += `<div class="exist-div" id="div" ><input disabled class="new-div" id="edit-inp" value="${textInput.value}">${editBtn} ${delBtn}</div>`;


        // input.innerHTML += `<div class="exist-div"><div class="new-div">${textInput.value}</div><button class="edit-del">Edit</button> <button class="edit-del">delete</button></div>`;

var del = document.getElementById("del");
var div = document.getElementById("div");
var edit = document.getElementById("edit");
var editInp = document.getElementById("edit-inp");

del.addEventListener("click", function () {
   div.innerHTML = "";

});
edit.addEventListener("click" , function(){
    editInp.innerHTML = `<input class="new-inp" type="text"  value="${textInput.value}">`;
})


})
