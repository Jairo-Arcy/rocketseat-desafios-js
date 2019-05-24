var names = ['Diego', 'Jairo', 'Maria'];
ulList = document.querySelector('ul'); 
function list() {
  for(nome of names){
    li= document.createElement("li");
    text = document.createTextNode(nome);  
    li.appendChild(text);
    ulList.appendChild(li);
  }
  
 
}
list();