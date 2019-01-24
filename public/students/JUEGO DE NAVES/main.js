//Obejtos importantes de canvas.
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

//Definir variables para las imagenes.
var fondo;

//Definicion de funciones.

function loadMedia(){

	fondo = new Image();
	fondo.src = 'orig_171981.jpg';
	fondo.onload = function(){
		var intervalo = window.setInterval(frameLoop,1000/55);

	}


}
function drawBackground(){
	ctx.drawImage(fondo,0,0);
}

function frameLoop(){
	drawBackground();

}
//Ejecucion de funciones.
loadMedia();