function mostrar()
{

	/*var contador=0;
	var acumulador=0;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;*/

var cont=0;
	var Suma=0;
	var num;
	var Promedio;
	
	document.getElementById('suma').value=Suma;
	document.getElementById('promedio').value=Promedio;

	while(cont<5) 
		{
			Promedio=Suma/cont;
			cont++;
			do
		{
			num=prompt("Ingrese el numero");
			num=parseInt(num);
		} while(esNaN(num));
		Suma+=num;
		}
}//FIN DE LA FUNCIÓN