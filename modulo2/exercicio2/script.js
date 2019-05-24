btn = document.querySelector('button');
squareElement = document.querySelector('#square');
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  var newColor = Math.random() * getRandomColor();
  btn.onclick = () => {
    element = document.createElement("div");
    element.style.width = "100px";
    element.style.height = "100px";
    element.style.backgroundColor = "red";
    element.style.margin = "10px 10px 10px 10px";
    var newText = document.createTextNode("Hello World!!");
    element.style.float = "left";
    element.appendChild(newText);
    document.body.insertBefore(element, btn );
    element.className = "element";
    element.onmouseover = () => {
      element.style.backgroundColor = getRandomColor();  
    }
    element.appendChild(squareElement);
  }















