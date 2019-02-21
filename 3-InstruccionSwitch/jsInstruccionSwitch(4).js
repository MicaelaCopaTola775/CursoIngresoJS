function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

switch(mesDelAño)
{
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
		mensaje="Tiene 31 días";
	break
	case "Febrero":
		mensaje="Tiene 28 días";
	break
	default:
		mensaje="Tiene 30 días";
	break
}

alert (mensaje);
	
}//FIN DE LA FUNCIÓN