function mostrar()
{
	var cont=0;
	var respuesta=true;
	var num;
	var Suma=0;
	var multiplicar=1;

	while(respuesta==true)
	{
		cont++;
		do
		{
			num=prompt("Ingrese el numero");
			num=parseInt(num);
		} while (isNaN(num));

		if(num>0)
		{
			Suma+=num;
		}
		if(num<0)
		{
			multiplicar*=num;
		}
		respuesta=confirm("¿Quiere seguir?");
	}

	document.getElementById('suma').value=Suma;
	document.getElementById('producto').value=multiplicar;

}//FIN DE LA FUNCIÓN