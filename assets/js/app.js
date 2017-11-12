function enabled() {
	var comments = document.getElementById('comment').value;
	var cantidad = 140 - comments.length;
	var espacios = comments.split(' ').length - 1;
	var enters = comments.split('\n').length - 1;
	document.getElementById('p1').innerHTML=cantidad;

	if (comments.length == 0 || cantidad < 0 || espacios + enters == comments.length){
		document.getElementById('btn').disabled = true;
		document.getElementById('btn').className = 'btn-disabled';
	}else{
		document.getElementById('btn').disabled = false;
		document.getElementById('btn').className = 'btn-enabled';
	}
}
function add(){
	/*tomo texto de textareaa*/
	var comments= document.getElementById('comment').value;
	/*limpealo del textarea*/
	document.getElementById('comment').value = '';
	/*el div en donde estan los comentario el html*/
	var newComments= document.createElement('div');
	var cont = document.getElementById('cont');
	var hora =moment().format('LT');

	var paragraph= document.createElement('p');
	var nodoText=document.createTextNode(comments);
	var nodoHour=document.createTextNode(hora);
	paragraph.appendChild(nodoText);
	/*agregar todos los huerfanos al padre(contenedor)*/
	newComments.appendChild(paragraph);
	newComments.appendChild(nodoHour);
	cont.appendChild(newComments);
	/*volver a preguntar por cada comentario*/
	enabled();
}
function numColor() {
	var comments = document.getElementById('comment').value;
	var cantidad = 140 - comments.length;
	if (cantidad < 20 && cantidad >=10){
		document.getElementById('tell').className = 'tell-2';
	}else if(cantidad < 10 && cantidad >=0){
		document.getElementById('tell').className = 'tell-3';
	}else{
		document.getElementById('tell').className = 'tell-1';
	}
}

function agrandar(){
	var comments = document.getElementById('comment').value;
	var linea = comments.split('\n');
	var lineas_necesarias = parseInt(comments.length/37) + 1;
		if((linea.length - 1 + lineas_necesarias) > 3){
			document.getElementById('comment').rows = linea.length - 1 + lineas_necesarias;
		} else {
			document.getElementById('comment').rows = 3;	
		}
}



