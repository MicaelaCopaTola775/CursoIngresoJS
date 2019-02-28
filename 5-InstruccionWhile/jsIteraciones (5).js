function mostrar()
{

var sexo = prompt("ingrese f ó m .");
var cont=0;

document.getElementById('Sexo').value=sexo;

while(sexo!="f"&&sexo!="m")
{
	sexo = prompt("Ingrese f ó m .");
	cont++;

	if (cont<3) 
	{
		break
	}
}
//document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN