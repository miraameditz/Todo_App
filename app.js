var input = document.getElementById("input");
var ol = document.querySelector("ol");
var array = [];

function button() {
    array.push(input.value);
    ol.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        ol.innerHTML += `<li>${array[i]} <button class="delete" onclick="deleteBtn(${i})"><i class="fa-solid fa-x"></i></button><button class="edit" onclick="editBtn(${i})"><i class="fa-solid fa-pencil"></i></button></li>`;
    }
    input.value = "";
}

function deleteBtn(index) {
    array.splice(index , 1)
    ol.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        ol.innerHTML += `<li>${array[i]} <button class="delete" onclick="deleteBtn(${i})"><i class="fa-solid fa-x"></i></button><button class="edit" onclick="editBtn(${i})"><i class="fa-solid fa-pencil"></i></button></li>`;
    }
}

function editBtn(index) {
    var editValue = prompt("Enter Your Updated Value" , array[index])
    if(editValue !== null && editValue !== "") {
        array[index] = editValue
        ol.innerHTML = "";
        for (var i = 0; i < array.length; i++) {
            ol.innerHTML += `<span><li>${array[i]}</span> <span><button class="delete" onclick="deleteBtn(${i})"><i class="fa-solid fa-x"></i></button><button class="edit" onclick="editBtn(${i})"><i class="fa-solid fa-pencil"></i></button></span></li>`;
        }
    }
}