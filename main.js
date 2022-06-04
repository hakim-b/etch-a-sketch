import "./style.css";

const gridContainer = document.querySelector(".sketch-grid");
const applyButton = document.getElementById('btnApply');
const closeButton = document.getElementById('btnErase');
const rangeMeter = document.getElementById('sizeInput');
const colorPicker = document.getElementById('colorPicker');
const boxDiv = document.querySelectorAll('.grid-box');

boxDiv.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = colorPicker.value;
    });
});

const createGrid = () => {

}

const reset = () => {
    
}