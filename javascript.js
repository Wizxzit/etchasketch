// variables
let brush = "black";

// DOM 
const pad = document.getElementById("pad");
const sixteen = document.getElementById("scaleOne");
const threeTwo = document.getElementById("scaleTwo");
const sixfour = document.getElementById("scaleThree");

// buttons
sixteen.addEventListener('click', a => {
    clearCanvas();
    makeCanvas(16);});
threeTwo.addEventListener('click', a => {
    clearCanvas();
    makeCanvas(32)});
sixfour.addEventListener('click', a => {
    clearCanvas();
    makeCanvas(64)});


// functions
// makeCanvas adds pixels to the sketch board according to the input number
// parameter (a => a*a). It makes a-number of vertical containers and fills
// the container with a-elements. 
function makeCanvas(pixelNum) {
    for (let i = 0; i < pixelNum; i++) {
        const vertical = document.createElement(`div${i}`);
        vertical.style.display = "flex";
        vertical.style.flexDirection = "column";
        vertical.style.flex = `1`;
        pad.appendChild(vertical);
        for (let j = 0; j < pixelNum; j++) {
            let pixel = document.createElement(`div${j}`);
            pixel.margin = "0";
            pixel.style.flex = `1`;
            pixel.style.border = "1px solid green";
            pixel.id = "pixel";
            pixel.addEventListener('click', function () {
                pixel.style.backgroundColor = "white";
            });
            vertical.appendChild(pixel);
        }
    }
};

function clearCanvas() {
    pad.innerHTML = "";
};


makeCanvas(3);