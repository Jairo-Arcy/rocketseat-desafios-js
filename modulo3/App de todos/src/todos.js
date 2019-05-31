listElement = document.querySelector('#app ul');
inputElement = document.querySelector('#app input');
buttonElement = document.querySelector('#app button');
var todos = JSON.parse(localStorage.getItem('list_todos'))|| [] ;
function renderTodos() {
  listElement.innerHTML = '';
  for(todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo); 
    var linkElement = document.createElement("a");
    var pos  = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    linkElement.setAttribute('href', '#');
    var linkText = document.createTextNode("Excluir");
    linkElement.style.marginLeft = "10px";
    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
    
  }


}
renderTodos();
function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}
function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() { 
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
buttonElement.onclick = () =>{
  addTodo()
};
inputElement.onkeyup = (e) => {
  if(e.which === 13){
    renderTodos();
    addTodo(); 
    saveToStorage();
    inputElement.value = null;
  }
}