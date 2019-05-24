btn = document.querySelector('button');

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
  }















