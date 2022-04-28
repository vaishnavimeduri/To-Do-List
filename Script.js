function addtaskhandler() {
  let newtaskname = document.getElementById("task-name").value;
  let newtaskdate = document.getElementById("task-date").value;
  let newtaskitem = document.createElement("li");
  newtaskitem.innerHTML = `<span> ${newtaskname} </span>
     <span> ${newtaskdate} </span>
     <button onclick="edittask(event)"> Edit </button>
      <button onclick="deletetask(event)"> x </button>
      <input class="task-checkbox" type="checkbox"/>`;
  document.getElementById("tasks-list-box").append(newtaskitem);
  document.getElementById("task-name").value = "";
  document.getElementById("task-date").value = "";
}
function deletetask(event) {
  let parentOfNode = event.target.parentNode;
  if (parentOfNode) {
    parentOfNode.remove();
  }
}
function edittask(event) {
  let currentitem = event.target.parentNode;
  let currentitemTaskName = currentitem.children[0];
  let currentitemTaskDate = currentitem.children[1];
  currentitem.innerHTML = `<span>${currentitem.children[0].innerText}</span>
    <span>${currentitem.children[1].innerText}</span>
    <input id="current-task-name" type="text" placeholder=${currentitemTaskName.innerText}/>
    <input id="current-task-date" type="date" placeholder=${currentitemTaskDate.innerText}/>
     <button onclick="savetask(event)"> Save </button> 
     <button onclick="deletetask(event)"> x </button>
     <input class="task-checkbox" type="checkbox"/>`;
  currentitemTaskName = currentitem.children[0];
  currentitemTaskDate = currentitem.children[1];
  currentitem.children[0].style.display = "none";
  currentitem.children[1].style.display = "none";
}
function savetask(event) {
  let currentitem = event.target.parentNode;
  let currentitemTaskName = currentitem.children[0];
  let currentitemTaskDate = currentitem.children[1];
  let editedtaskname = currentitem.children[2];
  let editedtaskdate = currentitem.children[3];
  currentitemTaskName.innerText = editedtaskname.value;
  currentitemTaskDate.innerText = editedtaskdate.value;
  editedtaskdate.remove();
  editedtaskname.remove();
  currentitemTaskName.style.display = "inline";
  currentitemTaskDate.style.display = "inline";
  currentitem.children[2].setAttribute("onclick", "edittask(event)");
  currentitem.children[2].innerText = "Edit";
}
function deletemultiple() {
  let selected = document.querySelectorAll(".task-checkbox");
  selected.forEach((Element) => {
    if (Element.checked) {
      Element.parentNode.remove();
    }
  });
}
function deleteall() {
  let selected = document.querySelectorAll(".task-checkbox");
  selected.forEach((Element) => Element.parentNode.remove());
}
