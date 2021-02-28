
const gridContainer = document.querySelector("#boxParent");
const resetButton = document.querySelector("#reset-button");


window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);

function setDefaultGrid() {
 makeRows(16);
                }

function makeRows(size) {
    for (let i = 0; i < size*size; i++) {
        const items = document.createElement('div'); // seleciono mi div (mi variable sera igual a mi div)
        items.className = "gridElement";   // luego le asigno la classe a mi variable 
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //creo Numero de columnas.
        items.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(items); // en row esta apendado el child box por eso muestro el row
    }
}


function changeColor(e) {
const randomR = Math.floor(Math.random() * 256);
const randomG = Math.floor(Math.random() * 256);
const randomB = Math.floor(Math.random() * 256);
e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}


function changeSize() {
let newSize = prompt("Enter new size");

if (newSize !== null) {
newSize = parseInt(newSize);
if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
  alert("Enter a number from 1-64 range");
  changeSize();
} else {
    gridContainer.innerHTML = "";
    makeRows(newSize);
}
}
}

