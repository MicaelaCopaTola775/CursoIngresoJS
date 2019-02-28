function mostrar()
{

	var contador=0;
	var max;
	var min;
	var bandera=true;
	var num;
	var rta=true;
	// declarar variables
	
	//var respuesta='si';

	//while(respuesta!='no')
	while(rta==true)
	{
	do
	{
		num=prompt("Ingrese el numero");
		num=parseInt(num);
	}while(esNaN(num));

	if(bandera)
	{
		bandera=false;
		max=num;
		min=num;
	} else 
	{
		if(num>max)
		{
			max=num;
		}
		if(num<min)
		{
			min=num;
		}
	}
	
	}
rta=confirm();


}//FIN DE LA FUNCIÓN