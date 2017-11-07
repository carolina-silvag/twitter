function enabled() {
	var comments = document.getElementById('comment').value;
	if (comments.length == 0){
		document.getElementById("btn").disabled = true;
		document.getElementById("btn").className = "btn-disabled";
	}else{
		document.getElementById("btn").disabled = false;
		document.getElementById("btn").className = "btn-enabled";
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

	var paragraph= document.createElement('p');
	var nodoText=document.createTextNode(comments);
	paragraph.appendChild(nodoText);
	/*agregar todos los huerfanos al padre(contenedor)*/
	newComments.appendChild(paragraph);
	cont.appendChild(newComments);
	/*volver a preguntar por cada comentario*/
	enabled();
}

function enabled(){
	var comments= document.getElementById('comment').value;
	var cantidad = 140 - comments.length
	document.getElementById('p1').innerHTML=cantidad
}


