function mostrar()
{
	var pago;
	var paquete;

	compra=prompt("Ingrese el precio de la compra");
	pago=prompt("Ingrese el tipo de pago: tarjeta visa, paypal, mercado pago, efectivo u otro");
	paquete=prompt("Ingrese el tipo de paquete: todo incluido, solo desayunos u otro");

	compra=parseInt(compra);

	switch(pago)
	{
		case "tarjeta visa":
		case "mercado pago":
			total=compra-(compra*0.10);
		break
		case "paypal":
			total=compra-(compra*0.15);
			switch(paquete)
			{	
				case "todo incluido":
					aumento=total+(total*0.10);
				break
			}
		break
		case "efectivo":
			total=compra-(compra*0.20);
			switch(paquete)
			{
				case "solo desayunos":
					aumento=total+(total*0.10);
				break
				case "todo incluido":
					aumento=total+(total*0.15);
				break
				default
					aumento="No tiene descuento adicional";
				break
			}
		break
		default
			total=compra-(compra*0.5);
		break

	}

	alert("Compra: "+compra+", Tipo de pago: "+pago+", Tipo de paquete: "+paquete+", Descuento: "+total+", Aumento: "+aumento);
    
}
