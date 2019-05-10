let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d'); 

const draw = function(){
    ctx.fillStyle = '#fce38a';
    ctx.fillRect(200, 200, 100, 100);
    ctx.fillStyle = 'rgba(252, 28, 102, 0.4)';
    ctx.fillRect(250, 250, 100, 100);
    ctx.fillStyle = '#fff';
    ctx.strokeRect(100, 100, 100, 100);
    ctx.clearRect(230, 230, 10, 10);
    ctx.clearRect(10, 10, 10, 10);
}

const clear = function(){
    ctx.clearRect(0, 0, 500, 500);
}

clear();