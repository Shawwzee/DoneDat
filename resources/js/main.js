// Image files for buttons
var removeIMG = '<img id="remove" src="assets/remove.png">';

document.getElementById("addsymbol").addEventListener('click', function() {
  var value = document.getElementById("taskinput").value;
  if (value) {
      addItemTodo(value);

  }
  document.getElementById("taskinput").value = "";
});

// Removes item from todo list
function removeItemTodo() {

  var item = this. parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

// Adds item to todo list
function addItemTodo(taskinput) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = taskinput;
  list.insertBefore(item, list.childNodes[0]);

  var remove = document.createElement('button')
  remove.setAttribute("id", "remove");
  remove.innerHTML = removeIMG;

  // Click event for removing item
  remove.addEventListener('click', removeItemTodo);

  item.appendChild(remove);
}
