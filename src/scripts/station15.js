function displayList(){
  let element = document.getElementById("fruits");
  let list = element.children;
  let ulNode = document.createElement("ul");
  Array.prototype.forEach.call(list, (element) => {
    let liNode = document.createElement("li");
    liNode.textContent = element.innerHTML;
    ulNode.appendChild(liNode);
  });
  while(element.firstChild)
    element.removeChild(element.firstChild);
  element.appendChild(ulNode);
}