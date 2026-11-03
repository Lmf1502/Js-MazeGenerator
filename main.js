let canvas = document.getElementById("canvas");

let Lmfcontext = canvas.getContext("2d");
 
//import  mazeBoy from './MazeGenerator.js';
//import {Circle} from './cicle.js'


var winHigh= window.innerHeight;
var winWide= window.innerWidth;

canvas.height = winHigh;
canvas.width = winWide;

canvas.style.background = "#bbff33";


//Lmfcontext.fillRect(0,0,100,100);

/*let LMFCircle = new Circle(200,200,100,"black");

LMFCircle.draw(Lmfcontext);*/
setup();
drawMaze();
//requestAnimationFrame(drawMaze());