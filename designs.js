let color = document.querySelector('#colorPicker');
let canvas = document.querySelector('#pixelCanvas');
let size = document.querySelector('#sizePicker');

let height = document.querySelector('#inputHeight').value;
let width = document.querySelector('#inputWidth').value;
makeGrid(height, width);

size.addEventListener('click', function (event) {
    event.preventDefault();
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWidth').value;
    canvas.firstElementChild.remove();
    makeGrid(height, width);
});

function makeGrid(height, width) {
    
for (let i = 0; i <= height; i++) {
    let row = canvas.insertRow(i);
    for (let j = 0; j <= width; j++) {
        let cell = row.insertCell(j);
        cell.addEventListener('click', function (event) {
            cell.style.backgroundColor = color.value;
        });
        
    }
}

}
