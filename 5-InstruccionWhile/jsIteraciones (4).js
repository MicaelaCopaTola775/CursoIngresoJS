function mostrar()
{
	var num=prompt("Ingrese un numero entre 0 y 9");
	var cont=0;

	while(cont<4)
	{
		cont++;

		if(num<0 || num>9)
		{
			num=prompt("Ingrese un numero entre 0 y 9");
		} else 
		{
			document.getElementById('Numero').value=num;
		}
	}

	/*
	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero<0||numero>9)
	{
		numero=prompt("Ingrese un número entre 0 y 10.");
		
	}*/

}//FIN DE LA FUNCIÓN