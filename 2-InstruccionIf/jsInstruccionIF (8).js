function mostrar()
{	
	var laEdad;
	var suEstadoCivil;

	laEdad=document.getElementById('edad').value;
	suEstadoCivil=document.getElementById('estadoCivil').value

	laEdad=parseInt(laEdad);
//tomo la edad  
	if (laEdad<18&&suEstadoCivil!="Soltero") {

	} else {
		if (suEstadoCivil=="Soltero"&&laEdad>=18) {
		alert("Es soltero y no es menor de edad")
	} else {}
}

	


}//FIN DE LA FUNCIÓN