// DOM 
const pad = document.getElementById("pad");


function makeCanvas(pixel) {
    for (let i = 0; i < pixel; i++) {
        const button = document.createElement(`button${i}`);
        button.addEventListener('click', function () {
            button.style.backgroundColor = "black";
        });
        pad.appendChild(button);
    }
};

makeCanvas(16);