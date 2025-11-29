let mouseX = 0;
let mouseY = 0;

function onMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    console.log("Mouse Moved:", mouseX, mouseY);
}

window.addEventListener('mousemove', onMouseMove);