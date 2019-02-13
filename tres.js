function mostrar()
{
	var precio;
	var porcentaje;
	var preciofinal;

	precio=prompt("Ingrese el precio");
	porcentaje=prompt("Ingrese el porcentaje");

	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;
	preciofinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=preciofinal
}
