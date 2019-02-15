
function mostrar()
{
	var mascota1;
	var mascota2;
	var kilo1;
	var kilo2;
	var suma;
 
 	mascota1=prompt("Ingrese el nombre de su primer mascota");
 	mascota2=prompt("Ingrese el nombre de su segunda mascota");

	kilo1=prompt("Ingrese el kilo de su primer mascota");
	kilo2=prompt("Ingrese el kilo de su segunda mascota");

	kilo1=parseInt(kilo1);
	kilo2=parseInt(kilo2);
 
	suma=kilo1+kilo2

	alert("Tenes dos mascotas: "+mascota1+" y "+mascota2+",que pesan: "+kilo1+" y "+kilo2+", la suma de los kilos es "+suma)
}
