var changeGrid = document.querySelector('#changeGrid');
var clear = document.querySelector('#clear');
var container = document.querySelector('#grid');
var dimension = 4;
container.style.setProperty('grid-template-columns', 'repeat(' + dimension + ', 1fr)');
for (let i = 0; i < (dimension * dimension); i++) {
  var square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}
changeGrid.onclick = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  dimension = prompt("Enter Dimension")
  container.style.setProperty('grid-template-columns', 'repeat(' + dimension + ', 1fr)');
  for (let i = 0; i < (dimension * dimension); i++) {
    var square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
};
clear.onclick = () => {
  window.location.reload();
}
container.onmouseover = (event) => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  event.target.style.backgroundColor = rgb;
  console.log(event);
}