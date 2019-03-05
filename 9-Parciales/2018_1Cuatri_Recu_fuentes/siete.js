function mostrar()
{
/*var cont=0,contCom=0;
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
*/

var cont=0,contM=0;
var nota;
var bandera=true;
var suma=0;

while(cont<5)
{

	cont++;
	do
	{
		sexo=prompt("Ingrese su sexo");
	} while (sexo!="f"&&sexo!="m");
	do
	{
		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);
	} while (isNaN(nota)||(nota<0||nota>10));

	suma+=nota;

	if (bandera)
	{
		bandera=false;
		min=nota;
		max=nota;
	} else
	{
		if (nota<min)
		{
			min=nota;
		}
		if (nota>max)
		{
			max=nota;
		}
	}

	if(sexo=="m"&&nota>=6)
	{
		contM++;
	} 

	promedio=suma/cont;
}



alert("El promedio de las notas totales es "+promedio+". La nota mas baja y el sexo de esa persona es "+min+sexo+", cantidad de varones con nota mayor o igual a 6: "+contM);

}
