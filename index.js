let imageSrc = null;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let gridsNumX = 5;
let gridsNumY = 5;

let selectedImg = null;

let strokeColour = "white";

let lineWidth = 2;


const openImage = async (url) => {
    let img = new Image;
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
    if (selectedImg != null) {
        ctx.drawImage(selectedImg, 0, 0, selectedImg.width, selectedImg.height);
        applyGrid()
    }
}

function drawLine(x1, y1, x2, y2) {

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColour;

    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    // Draw the Path
    ctx.stroke();
}

async function applyGrid() {

    let xSize = Math.ceil(canvas.height / gridsNumY);
    for (let i = xSize; i < canvas.height; i += xSize) {
        drawLine(0, i, canvas.width, i);
    }
    let ySize = Math.ceil(canvas.width / gridsNumX);
    for (let i = ySize; i < canvas.width; i += ySize) {
        drawLine(i, 0, i, canvas.height);
    }
}

document.getElementById("grids_x_number_select").addEventListener("change", (e) => {
    gridsNumX = parseInt(e.target.value);
    drawImage();
})

document.getElementById("grids_y_number_select").addEventListener("change", (e) => {
    gridsNumY = parseInt(e.target.value);
    drawImage();
})

document.getElementById("choose_image_file").addEventListener("change", handleFiles);

function handleFiles(e) {
    let imageSrc = URL.createObjectURL(e.target.files[0]);
    openImage(imageSrc);
}

document.getElementById("download_image").addEventListener("click", (e) => {
    downloadImageWithGrid(e);
})

document.getElementById("stroke_color_select").addEventListener("change", (e) => {
    strokeColour = e.target.value;
    drawImage();
});

document.getElementById("line_width_select").addEventListener("change", (e) => {
    lineWidth = parseInt(e.target.value);
    drawImage();
});


function downloadImageWithGrid() {
    let img = canvas.toDataURL("image/png");
    var a = document.createElement('a');
    a.href = img
    a.download = 'grid-canvas-download.png';
    a.click();
}


// init
imageSrc = 'temp.jpg';
openImage(imageSrc);

