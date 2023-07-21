var imageSrc = 'temp.jpg';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var gridsNum = 5;

var selectedImg;


const openImage = async (url) => {
    var img = new Image;
    img.src = url;
    img.onload = () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        selectedImg = img
        ctx.drawImage(selectedImg, 0, 0, img.width, img.height);
        applyGrid()
    }
}

function drawImage() {
    ctx.drawImage(selectedImg, 0, 0, selectedImg.width, selectedImg.height);
    applyGrid()
}

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

async function applyGrid() {

    let xSize = Math.ceil(canvas.height / gridsNum);
    for (let i = xSize; i < canvas.height; i += xSize) {
        drawLine(0, i, canvas.width, i);
    }
    let ySize = Math.ceil(canvas.width / gridsNum);
    for (let i = ySize; i < canvas.width; i += ySize) {
        drawLine(i, 0, i, canvas.height);
    }
}

document.getElementById("draw_grid_button").addEventListener("click", () => {
    drawImage()
})

document.getElementById("grids_number_select").addEventListener("change", (e) => {
    gridsNum = parseInt(e.target.value);
    drawImage();
})

document.getElementById("choose_image_file").addEventListener("change", (e) => {
    imageSrc.src = e.target.value;
    openImage(imageSrc);
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