// variables
let brush = "black";

// DOM 
const pad = document.getElementById("pad");

const sixteen = document.getElementById("scaleOne");
const threeTwo = document.getElementById("scaleTwo");
const sixfour = document.getElementById("scaleThree");

const black = document.getElementById("black");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const orange = document.getElementById("orange");

const eraser = document.getElementById("eraser");

// buttons
// 16x16
sixteen.addEventListener('click', function() {
    clearCanvas();
    makeCanvas(16);});
// 32x32
threeTwo.addEventListener('click', function() {
    clearCanvas();
    makeCanvas(32)});
// 64x64
sixfour.addEventListener('click', function() {
    clearCanvas();
    makeCanvas(64)});
// black
black.addEventListener('click', function() {
    brush = "black";
});
// red
red.addEventListener('click', function() {
    brush = "red";
});
// blue
blue.addEventListener('click', function() {
    brush = "blue";
});
// yellow
yellow.addEventListener('click', function() {
    brush = "yellow";
});
// green 
green.addEventListener('click', function() {
    brush = "green";
});
// orange
orange.addEventListener('click', function() {
    brush = "orange";
});

// eraser
eraser.addEventListener('click', function() {
    clearCanvas();
    makeCanvas(3)});

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
                pixel.style.backgroundColor = brush;
            });
            vertical.appendChild(pixel);
        }
    }
};

function clearCanvas() {
    pad.innerHTML = "";
};


makeCanvas(5);