function mostrar()
{
	var laEdad;

	laEdad=document.getElementById('edad').value;
	suEstadoCivil=document.getElementById('estadoCivil').value;

//tomo la edad  
	if (laEdad<18&&suEstadoCivil!="Soltero") {
		alert("Usted es muy pequeño para NO ser soltero")
	}
	


}//FIN DE LA FUNCIÓN