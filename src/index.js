document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const form = document.getElementById("todo-form");
const input = doument.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener(submit, function(event){
  event.preventDefault();//prevent default form submission behavior

const task = input.value.trim();//get input value and trim whitespace

if (task !==""){//check if task is not empty
const listenItem = document.createElement("li");//create new element list item
listenItem.textContent = task;//set list item text content
list.appendChild(listenItem);//add list item to list
input.value = "";//reset inpuut value to epmty string
 } 
});