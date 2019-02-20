function mostrar()
{
	var precio;
	var libros;
	var porcentajeDes;
	var descuento;
	var porcentajeTar;
	var recargo;

	libros=prompt("Ingrese la cantidad de libros");
	precio=prompt("Ingrese el precio de cada libro");
	pago=prompt("¿Usted pagara con tarjeta o en efectivo");

	precio=parseInt(precio);
	libros=parseInt(libros);
	porcentajeDes=parseInt(porcentajeDes);
	descuento=parseInt(descuento);
	porcentajeTar=parseInt(porcentajeTar);
	recargo=parseInt(recargo);

	compra=precio*libros

	if (libros>2) 
	{
		porcentajeDes=compra*10/100;
		descuento=compra-porcentajeDes;

	} else 
	{
		if (compra>2000) 
			{
				porcentajeDes=compra*15/100;
				descuento=compra-porcentajeDes;
			} else 
			{
				if (pago=="tarjeta") 
				{
					porcentajeTar=descuento*10/100;
					recargo=descuento+porcentajeTar;
				}

			}			
 	alert("Usted compró "+libros+" libros y el precio de cada libro es de $"+precio+", el total a pagar es de $"+compra+". Al hacerle el descuento su total quedo en $"+descuento)
}

}

