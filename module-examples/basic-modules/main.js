import * as Canvas from './modules/canvas.js';
import * as Square from './modules/square.js';
import * as Circle from './modules/circle.js';


let myCanvas = Canvas.create('myCanvas', document.body, 480, 320);
let reportList = Canvas.createReportList(myCanvas.id);

let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'red');
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);

// Use the default
let square2 = Square.randomSquare(myCanvas.ctx);

let circle1 = Circle.draw(myCanvas.ctx, 150, 75, 100, 'green');
