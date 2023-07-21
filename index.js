
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const drawImage = (url) => {
    var img = new Image;
    img.src = url;
    img.onload = () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0, img.width, img.height);
    }
}

// TODO: change image
drawImage('temp.jpg');

function drawLine(x1, y1, x2, y2) {

    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";

    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    // Draw the Path
    ctx.stroke();
}


let gridsNum = 5;

// TODO: parametrize
function applyGrid() {
    let xSize = canvas.height / gridsNum;
    for(let i = xSize; i < canvas.height; i += xSize)
    {
        drawLine(0, i, canvas.width, i);
    }
    let ySize = canvas.width / gridsNum;
    for(let i = ySize; i < canvas.width; i += ySize)
    {
        drawLine(i, 0, i, canvas.height);
    }
}

document.getElementById("draw_grid_button").addEventListener("click", () => {
    applyGrid();
})


// TODO:
function changeGridSize() {

}

// TODO:
function changeGridColor() {

}

// TODO:
function changeGridThickness() {

}

// TODO:
function downloadImageWithGrid() {
    
}