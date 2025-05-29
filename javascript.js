// DOM 
const pad = document.getElementById("pad");


function makeCanvas(pixel) {
    for (let i = 0; i < pixel; i++) {
        const vertical = document.createElement(`div${i}`);
        vertical.style.display = "flex";
        vertical.style.flexDirection = "column";
        vertical.style.flex = `1`;
        vertical.style.aspectRatio = "1 / 1";
        pad.appendChild(vertical);
        for (let j = 0; j < pixel; j++) {
            const horizontal = document.createElement(`div${j}`);
            horizontal.margin = "0";
            horizontal.style.flex = `1`;
            horizontal.style.border = "1px solid blue";
            horizontal.addEventListener('mouseover', function () {
            horizontal.style.backgroundColor = "black";
        });
            vertical.appendChild(horizontal);
        }
    }

};

makeCanvas(9);