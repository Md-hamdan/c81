canvas=document.getElementById("my_canvas")
ctx=canvas.getContext("2d")

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,20,0,Math.PI*2)
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
}

function circle(mousex,mousey) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,20,0,Math.PI*2)
    ctx.stroke(); 
}