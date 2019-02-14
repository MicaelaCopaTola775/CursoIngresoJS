function mostrar()
{
	var laEdad;

	laEdad=document.getElementById('edad').value;
	laEdad=parseInt(laEdad);
//tomo la edad  
	if (laEdad<13||laEdad>17) {
		alert("Usted no es adolescente")
	}

}//FIN DE LA FUNCIÓN