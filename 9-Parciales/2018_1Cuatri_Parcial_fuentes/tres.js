function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;

	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);

	precio=prompt("Ingrese el precio");
	porcentaje=prompt("Ingrese el porcentaje");

	descuento=precio*porcentaje/100;
	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioFinal
}
