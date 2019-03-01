function mostrar()
{
var cont=0,contCom=0;
var respuesta=true;
var num,tipo,promedio;
var bandera=true;
var min,max;
var acum=0;
var cantidad;

while(respuesta==true)
{
	cont++;

	do
	{
		num=prompt("Ingrese las velocidades de kilometro");
		num=parseInt(num);

	} while (isNaN(num) || (num < 0 ||  num > 250));
	do
	{
		tipo=prompt("Ingrese el tipo de combustible: s ó l");
	}while(tipo!="s"&&tipo!="l");

	acum += num;

	if(bandera)
	{
		bandera=false;
		min=num;
		max=(tipo="s");
	} else 
	{
		if(num<min)
		{
			min=num;
		}
		if((tipo="s")>max)
		{
			max=(tipo="s");
		}
	}
	
	do
	{
		if(tipo="l");
		{
		contCom++;  
		}
	}while(contCom>100);



	promedio=acum/cont; 

	respuesta=confirm("¿Quiere seguir ingresesando numeros?");

}

alert("El promedio de las velocidades totales es "+promedio+". La velocidad más baja y su tipo de combustible es "+min+tipo+". La cantidad de combustibles liquidos es "+contCom+". La velocidad más alta de los combustibles solidos es "+max);

}
