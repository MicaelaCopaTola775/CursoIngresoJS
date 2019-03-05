function mostrar()
{
	var respuesta=true;
	var num;
	var Suma=0;
	var cont=0;
	
	while(respuesta==true)
	{
		cont++;

		do
		{
			num=prompt("Ingrese el numero");
			num=parseInt(num);
		} while (isNaN(num));

		Suma+=num;

		respuesta=confirm("¿Quiere seguir?");
	}
	
	//respuesta=confirm();
	document.getElementById('suma').value=Suma;
	document.getElementById('promedio').value=Suma/cont;
}//FIN DE LA FUNCIÓN