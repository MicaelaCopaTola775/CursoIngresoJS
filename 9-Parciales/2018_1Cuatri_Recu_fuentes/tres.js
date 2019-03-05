function mostrar()
{
	/*var precio;
	var porcentaje;
	var personas;
	var propina;


	personas=prompt("Ingrese la cantidad de personas");
	precio=prompt("Ingrese el precio de la compra");

	personas=parseInt(personas);
	precio=parseInt(precio);

	porcentaje=precio*10/100;

	propina=precio+porcentaje;

	porcentajeiva=precio*21/100;


	totaldecadauno=propina/personas;

	alert("Son "+personas+" personas, el precio es de $"+precio+",mas la propina es de $"+propina+". En total cada uno debera pagar $"+totaldecadauno)
*/

	var precio=prompt("Ingrese el precio.");
	var porcentaje=prompt("Ingrese el porcentaje de descuento");

	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;
	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioFinal;

}
