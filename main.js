import "./style.css";

const gridContainer = document.querySelector(".sketch-grid");
const btnReset = document.querySelector(".btn-control");
const rangeMeter = document.getElementById('sizeInput');
const colorPicker = document.getElementById('colorPicker');
const gridSizeValue = document.getElementById('gridSize');
let boxSize = parseInt(rangeMeter.value);

const setUpGrid = (size) => {
    for (let i = 0; i < size * size; i++) {
        gridContainer.style.gridTemplateRows = `repeat(${size}, auto)`;
        gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;

        let square = document.createElement('div');
        square.className = 'grid-box';
        gridContainer.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = colorPicker.value;
        });
    }
}

document.body.addEventListener("load", setUpGrid(boxSize));

rangeMeter.addEventListener("input", (event) => {
    boxSize = event.target.value;
    gridSizeValue.textContent = `${boxSize}x${boxSize}`;
});

btnReset.addEventListener("click", () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    setUpGrid(boxSize);
});

