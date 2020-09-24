'use strict'



window.addEventListener('load',()=>{

	var formulario= document.querySelector("#formulario");

	var mostrar=document.querySelector("#mostrar");

	

	mostrar.addEventListener('click',()=>{

		var usuario=document.querySelector("#usuario").value;
		var contraseña=document.querySelector("#contraseña").value;	

		if(usuario =="admin" && contraseña==1234){
			window.location.href="./juego.html";
		}else{
			alert("Datos equivocados")

		}

	});

});