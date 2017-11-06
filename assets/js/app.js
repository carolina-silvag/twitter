function add(){
	/*tomo texto de textareaa*/
	var comments= document.getElementById('comment').value;
	if (comments.length >0) {
		/*limpealo del textarea*/
		document.getElementById('comment').value = '';
		/*el div en donde estan los comentario el html*/
		var newComments= document.createElement('div');
		var cont = document.getElementById('cont');


		var paragraph= document.createElement('p');
		/*paragraph.classList.add('color');*/
		var nodoText=document.createTextNode(comments);
		paragraph.appendChild(nodoText);

		/*agregar todos los huerfanos al padre(contenedor)*/
		newComments.appendChild(paragraph);
		cont.appendChild(newComments);
		
	}else{
		alert('Debe ingresar un texto');
	}
}
