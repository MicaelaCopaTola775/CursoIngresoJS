/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = elNombre.value;
	document.getElementById('elNombre').value=nombre;
	alert(nombre)
}


