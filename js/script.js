const draw = function(){
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d'); 
    ctx.fillStyle = '#fce38a';
    ctx.fillRect(200, 200, 100, 100);
    ctx.fillStyle = 'rgba(252, 28, 102, 0.4)';
    ctx.fillRect(250, 250, 100, 100);
    ctx.fillStyle = '#fff';
    ctx.strokeRect(100, 100, 100, 100);
    ctx.clearRect(230, 230, 10, 10);
    ctx.clearRect(10, 10, 10, 10);
}

draw();