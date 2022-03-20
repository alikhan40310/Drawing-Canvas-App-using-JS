function colorChange(data) {
    color =  data;
    document.getElementById('editBox').style.border = `2px solid ${color}`;
}
window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // resizing
    canvas.width = 650;
    canvas.height = 350;
    // event listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("touchstart", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("touchend", endPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchmove", draw);
    document.querySelector("#clear").addEventListener("click", clearCanvas);
    document.querySelector("#undo").addEventListener("click", undo);
    document.querySelector("#save").addEventListener("click", save);
    // variables
    let painting = false;
    let restore = [];



});