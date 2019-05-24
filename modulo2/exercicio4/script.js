ul = document.querySelector('ul')
input = document.querySelector('input[name="nome"]');
btn = document.querySelector('button'); 
btn.onclick = () => {
    li = document.createElement("li"); 
    text = document.createTextNode(input.value); 
    li.appendChild(text); 
    ul.appendChild(li);
    input.value = null;
    if(input.value == ""){
     ul.removeChild(li);
     alert("Insira primeiro");
    }
}
input.onkeyup = (e) => {
  if(e.which === 13){
    li = document.createElement("li"); 
    text = document.createTextNode(input.value); 
    li.appendChild(text); 
    ul.appendChild(li);
    input.value = null;
  }
}