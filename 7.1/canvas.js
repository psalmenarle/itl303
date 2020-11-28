var canvas = document.getElementById("canvas1");
	var ctx = canvas.getContext("2d");

ctx.beginPath();
  ctx.strokeStyle="red";
  ctx.fillStyle="white";
  ctx.lineWidth="15";
  ctx.arc(150,50,40,0,Math.PI * 2);
	ctx.stroke();
  ctx.fill();
  ctx.closePath();

 
ctx.beginPath();
 ctx.strokeStyle="gray";  
  ctx.lineWidth="10";
	ctx.moveTo(150,90);
	ctx.lineTo(150,200);
	ctx.stroke();
  ctx.closePath();

ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("STOP", 110, 60);

var canvas = document.getElementById("canvas2");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
  ctx.strokeStyle="green";
  ctx.fillStyle="red";
  ctx.lineWidth="20";
  ctx.arc(150,50,75,0,Math.PI * 1);
	ctx.stroke();
  ctx.fill();
  ctx.closePath();

ctx.beginPath();
  ctx.fillStyle="black";
  ctx.lineWidth="15";
  ctx.arc(110,70,7,0,Math.PI * 2);
  ctx.fill();
  ctx.closePath();

ctx.beginPath();
  ctx.fillStyle="black";
  ctx.lineWidth="15";
  ctx.arc(125,90,7,0,Math.PI * 2);
  ctx.fill();
  ctx.closePath();

ctx.beginPath();
  ctx.fillStyle="black";
  ctx.lineWidth="15";
  ctx.arc(155,100,7,0,Math.PI * 2);
  ctx.fill();
  ctx.closePath();

ctx.beginPath();
  ctx.fillStyle="black";
  ctx.lineWidth="15";
  ctx.arc(185,90,7,0,Math.PI * 2);
  ctx.fill();
  ctx.closePath();

ctx.beginPath();
  ctx.fillStyle="black";
  ctx.lineWidth="15";
  ctx.arc(195,70,7,0,Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  var canvas = document.getElementById("canvas3");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.fillStyle="gray";
  ctx.rect(130,80,40,50);
  ctx.fill();
  ctx.closePath();

ctx.beginPath();
  ctx.lineWidth="5";
  ctx.strokeStyle="black";
  ctx.moveTo(130,110);
  ctx.lineTo(170,110);
  ctx.stroke();
  ctx.closePath();

ctx.beginPath();
  ctx.lineWidth="5";
  ctx.strokeStyle="black";
  ctx.moveTo(130,120);
  ctx.lineTo(170,120);
  ctx.stroke();
  ctx.closePath();

ctx.beginPath();
  ctx.fillStyle="orange";
  ctx.arc(150,50,40,0,Math.PI *2);
  ctx.fill();
  ctx.closePath();

ctx.beginPath();
  ctx.fillStyle="yellow";
  ctx.arc(150,75,15,0,Math.PI *2);
  ctx.fill();
  ctx.closePath();

  var canvas = document.getElementById("canvas4");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
ctx.lineWidth="8";
 ctx.strokeStyle="silver";
ctx.moveTo(100, 70);
ctx.bezierCurveTo(100, 20, 200, 20, 200, 70);
ctx.stroke();
 ctx.closePath();

ctx.beginPath();
ctx.fillStyle="orange";
ctx.rect(95,70,110,60);
ctx.fill();
ctx.closePath();

ctx.beginPath();
  ctx.lineWidth="4";
  ctx.strokeStyle="silver";
  ctx.moveTo(110,90);
  ctx.lineTo(110,120);
  ctx.stroke();
  ctx.closePath();

ctx.font = "25px Arial";
ctx.fillStyle = "black";
ctx.fillText("YALE", 130, 120);

var canvas = document.getElementById("canvas5");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
ctx.lineWidth="10";
ctx.strokeStyle="black";
ctx.fillStyle="white";
ctx.rect(70,20,160,110);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="red";
ctx.rect(130,35,40,45);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="red";
ctx.rect(130,95,40,20);
ctx.fill();
ctx.closePath();

var canvas = document.getElementById("canvas6");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.fillStyle= "#E5CB90";
  ctx.moveTo(120,55);
  ctx.lineTo(150,30);
  ctx.lineTo(182,55);
  ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="yellow";
ctx.rect(120,55,60,65);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="red";
ctx.rect(120,115,60,20);
ctx.fill();
ctx.closePath();

ctx.beginPath();
  ctx.lineWidth="5";
  ctx.strokeStyle="black";
  ctx.moveTo(140,55);
  ctx.lineTo(140,115);
  ctx.stroke();
  ctx.closePath();

ctx.beginPath();
  ctx.lineWidth="5";
  ctx.strokeStyle="black";
  ctx.moveTo(160,55);
  ctx.lineTo(160,115);
  ctx.stroke();
  ctx.closePath();

  var canvas = document.getElementById("canvas7");
  var ctx = canvas.getContext("2d");

  
ctx.beginPath();
ctx.strokeStyle="brown";
ctx.fillStyle="white";
ctx.lineWidth="15";
ctx.arc(150,70,50,0, 2 * Math.PI,false);
  ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth="5";
ctx.strokeStyle="black";
ctx.moveTo(150,65);
ctx.lineTo(170,100);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth="5";
ctx.strokeStyle="black";
ctx.moveTo(153,68);
ctx.lineTo(125,60);
ctx.stroke();
ctx.closePath();

ctx.font = "bold 15px Arial ";
ctx.fillStyle = "black";
ctx.fillText("12", 140, 35);

ctx.font = "bold 15px Arial ";
ctx.fillStyle = "black";
ctx.fillText("3", 185, 75);

ctx.font = "bold 15px Arial ";
ctx.fillStyle = "black";
ctx.fillText("6", 145, 115);

ctx.font = "bold 15px Arial ";
ctx.fillStyle = "black";
ctx.fillText("9", 105, 75);
  

var canvas = document.getElementById("canvas8");
var ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.fillStyle="pink";
ctx.moveTo(100,50);
ctx.bezierCurveTo(100, 10, 200, 10, 200, 50);
ctx.fill();
 ctx.closePath();

ctx.beginPath();
ctx.fillStyle="pink";
ctx.rect(100,50,100,50);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="orange";
ctx.rect(130,100,35,30);
ctx.fill();
ctx.closePath();

ctx.beginPath();
  ctx.lineWidth="10";
  ctx.strokeStyle="#FF69B4";
  ctx.moveTo(130,40);
  ctx.lineTo(130,90);
  ctx.stroke();
  ctx.closePath();

ctx.beginPath();
  ctx.lineWidth="10";
  ctx.strokeStyle="#FF69B4";
  ctx.moveTo(170,40);
  ctx.lineTo(170,90);
  ctx.stroke();
  ctx.closePath();