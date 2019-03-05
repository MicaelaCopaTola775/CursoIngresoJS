function mostrar()
{
	var sexo=prompt("Ingrese su sexo: f ó m");

	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("Ingrese su sexo: f ó m");
	}

	document.getElementById('Sexo').value=sexo;

	/*
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
	} */
}//FIN DE LA FUNCIÓN