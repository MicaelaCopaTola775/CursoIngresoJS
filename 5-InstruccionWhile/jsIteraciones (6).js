function mostrar()
{
	var num;
	var cont=0;
	var Suma=0;
	var Promedio;

	while(cont<5)
	{
		cont++;

		do
		{
			num=prompt("Ingrese el numero");
			num=parseInt(num);
		} while (isNaN(num));

		Suma+=num;
		Promedio=Suma/cont;

		//document.getElementById('suma').value=Suma;
		//document.getElementById('promedio').value=Promedio;
	}

document.getElementById('suma').value=Suma;
document.getElementById('promedio').value=Promedio;

}//FIN DE LA FUNCIÓN