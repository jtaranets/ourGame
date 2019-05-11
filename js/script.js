/**
 * @name Pong
 *
 * @author jtaranets;
 * @author pazuzu-demon;
 */

"use strict";

let canvas, ctx;
let oldTimeStamp = 0;
let test = 10;

window.onload = init;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 480;
    window.requestAnimationFrame(loop);
}

function loop(timeStamp) {
    let secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    clearCanvas();
    update(secondsPassed);
    draw();
    window.requestAnimationFrame(loop);
}

function draw() {
    ctx.fillStyle = '#fce38a';
    ctx.fillRect(200 + test, 200 + test, 100, 100);
    ctx.fillStyle = 'rgba(252, 28, 102, 0.4)';
    ctx.fillRect(250 + test, 250 - test, 100, 100);
    ctx.fillStyle = '#fff';
    ctx.strokeRect(100 + test, 100, 100, 100);
    ctx.clearRect(230 + test, 230 + test, 10, 10);
    ctx.clearRect(10 + test, 10, 10, 10);
}

function update() {
    test++;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff8080';
}
