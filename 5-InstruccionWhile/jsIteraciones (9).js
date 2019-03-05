function mostrar()
{
	var cont=0;
	var min,max;
	var bandera=true;
	var respuesta=true;
	var num;

	while(respuesta==true)
	{
		do
		{
			num=prompt("Ingrese un numero");
		} while (isNaN(num));

		if (bandera)
		{
			bandera=false;
			max=num;
			min=num;
		} else 
		{
			if (num>max)
			{
				max=num;
			}
			if (num<min)
			{
				min=num;
			}
		}

		respuesta=confirm("¿Quiere seguir?");
	}
	
document.getElementById('minimo').value=min;
document.getElementById('maximo').value=max;

}//FIN DE LA FUNCIÓN