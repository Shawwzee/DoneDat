// Image files for buttons
var removeIMG = '<img id="remove" src="assets/remove.png">';
var completedIMG = '<img id="remove" src="assets/completed.png">'

// Click event, check if there is an input in taskinput and if there is, executes addItemToDo function
document.getElementById("addsymbol").addEventListener('click', function() {
  var value = document.getElementById("taskinput").value;
  if (value) {
      addItemTodo(value);
  }
  document.getElementById("taskinput").value = "";
});


// Removes item from todo list
function removeItemTodo() {

  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}



// Adds item to todo list
function addItemTodo(taskinput) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = taskinput;
  list.insertBefore(item, list.childNodes[0]);

  var buttons = document.createElement('div');
  buttons.setAttribute("id", "buttons");
  item.appendChild(buttons);

  var completed = document.createElement('button')
  completed.setAttribute("id", "completed");
  completed.innerHTML = completedIMG;

  var remove = document.createElement('button')
  remove.setAttribute("id", "remove");
  remove.innerHTML = removeIMG;



  // Click events for removing and completing an item
  remove.addEventListener('click', removeItemTodo);
  completed.addEventListener('click', addItemToCompleted);

  buttons.appendChild(remove);
  buttons.appendChild(completed);



  // User completes a task
  function addItemToCompleted() {
    var completedList = document.getElementById('completedTasks')

    var completedItem = document.createElement('li');
    completedItem.innerText = item.innerText;
    completedList.insertBefore(completedItem, completedList.childNodes[0]);
    completedItem.style="text-decoration: line-through;"

    var buttons = document.createElement('div');
    buttons.setAttribute("id", "buttons");
    completedItem.appendChild(buttons);

    var completed = document.createElement('button')
    completed.setAttribute("id", "completed");
    completed.innerHTML = completedIMG;

    var remove = document.createElement('button')
    remove.setAttribute("id", "remove");
    remove.innerHTML = removeIMG;

    buttons.appendChild(remove);
    buttons.appendChild(completed);

    var task = this.parentNode.parentNode;
    var parent = task.parentNode;

    parent.removeChild(task);

    remove.addEventListener('click', removeItemTodo);
    completed.addEventListener('click', removeItemCompleted);

    buttons.appendChild(remove);
    buttons.appendChild(completed);
  }

  // User removes a task from completed
  function removeItemCompleted() {
    var item = document.createElement('li');
    item.innerText = taskinput;
    list.insertBefore(item, list.childNodes[0]);

    var buttons = document.createElement('div');
    buttons.setAttribute("id", "buttons");
    item.appendChild(buttons);

    var completed = document.createElement('button')
    completed.setAttribute("id", "completed");
    completed.innerHTML = completedIMG;

    var remove = document.createElement('button')
    remove.setAttribute("id", "remove");
    remove.innerHTML = removeIMG;

    remove.addEventListener('click', removeItemTodo);
    completed.addEventListener('click', addItemToCompleted);

    buttons.appendChild(remove);
    buttons.appendChild(completed);

    var task = this.parentNode.parentNode;
    var parent = task.parentNode;

    parent.removeChild(task);
  }
}
