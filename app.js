const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");

window.addEventListener("load", defaultGrid);
resetButton.addEventListener("click", resizeGrid);

function defaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        var square = document.createElement("div");
        square.classList = "square";
        square.addEventListener("mouseover", changeColor);
        container.appendChild(square);
    }
}

function changeColor(square) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    square.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function resizeGrid() {
    let size = prompt("Please enter the grid size between 2 and 64: ");

    if (size > 64 || size < 2 || size == NaN) {
        alert("Please enter a number between 2 and 64!!!")
        resizeGrid()
    } else {
        clearGrid();
        setGridSize(size);
        fillGrid(size);
    }
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    })
}