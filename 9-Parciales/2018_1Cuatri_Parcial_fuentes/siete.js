function mostrar()
{
	var cont=0;
	var sexo;
	var nota;
	var max,min;
	var bandera=true;
	var promedio;


	while(cont<5)
	{
		cont++;
		do
		{
			sexo=prompt("Ingrese su sexo");
		} while(sexo!="m"&&sexo!="f");
		do
		{
			nota=prompt("Ingrese su nota");
			nota=parseInt(nota);
			promedio=nota/cont;

		} while(nota=="NaN"||(nota<0&&nota>10));
		
		if(bandera)
		{
			bandera=false
			max=nota
			min=nota
		} else 
		{
			if(nota>max)
			{
				max=nota;
			}
			if(nota<min)
			{
				min=nota;
			}
		}
		
	}

	alert("El promedio de las notas totales es "+promedio/*+". La nota más baja es "+min+"y el sexo de esa persona es "+sexo+". La cantidad de varones que tuviveron la mayor o igual a 6 son "*/)
}
