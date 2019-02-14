function mostrar()
{	
	var laEdad;

	laEdad=document.getElementById('edad').value;
	laEdad=parseInt(laEdad);

//tomo la edad  
	if (laEdad>=18) {
		alert("Usted es mayor de edad")
	} else {
		if (laEdad>=13&&laEdad<=17) {
		alert("Usted es adolescente")
	} else {
		alert("Usted es niño")
	} 
}  

}//FIN DE LA FUNCIÓN