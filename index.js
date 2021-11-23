'use strict';
const canvas = document.getElementById("paint");
const ctx = canvas.getContext("2d");

function draw(){
    // const canvas = document.getElementById("paint");
    if (canvas.getContext) {
        // const ctx = canvas.getContext("2d");
        
        const myCanvas = document.getElementById("myCanvas");
        let myCanvas_style = getComputedStyle(myCanvas);
        canvas.width = 500;
        canvas.height = 250;

        let mouse = {x:0, y:0};

        ctx.save();

    // refactor into another function for mouse recapture //
        canvas.addEventListener('mousemove', function(e){
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);
    
    // refactor for new fuction for drawing
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.strokeStyle = 'red';

        getColor();
        getSize();
        
        

        canvas.addEventListener('mousedown', function(e) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);

            canvas.addEventListener('mousemove', onPaint, false);
        }, false);

        canvas.addEventListener('mouseup', function() {
            canvas.removeEventListener('mousemove', onPaint, false);
        }, false);

        let onPaint = function() {
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        };

    } else {
        console.log("it's not working!")
        // replace with code for browsers that don't suport canvas 
    }
}

draw();

// Changes color of brush on canvas
function getColor(color){
    ctx.strokeStyle = color;
}

// Changes size of brush on canvas
function getSize(size){
        ctx.lineWidth = size;
    }

function clearAll(){
    console.log("im getting called!")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveImage(){
    const dataURI = canvas.toDataURL();
    console.log(dataURI);
    imageConverted.src = dataURI;
}

// ctx.moveTo(0, 0);

// ctx.lineTo(500, 250)

// ctx.stroke();