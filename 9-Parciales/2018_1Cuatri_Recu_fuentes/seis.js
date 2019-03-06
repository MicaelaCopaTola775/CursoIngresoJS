function mostrar()
{
	/*var pago;
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
    */

    var hora = document.getElementById('laHora').value;
    var mensaje;

    switch(hora)
    {
    	case "6":
    	case "7":
    	case "8":
    	case "9":
    	case "10":
    	case "11":
    		mensaje="es de mañana";
    	break;
    	case "12":
    	case "13":
    	case "14":
    	case "15":
    	case "16":
    	case "17":
    	case "18":
    	case "19":
    		mensaje="es de tarde";
    	break;
    	default:
    		mensaje="es de noche";
    		if (mensaje=="es de noche" && hora<24)
    		{
    			mensaje="es de noche, a dormir";
    		}
    	break;

    }

alert(mensaje);

}
