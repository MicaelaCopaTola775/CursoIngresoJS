function mostrar()
{
/*1-en siete.js,
Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólido

2-en ocho.js, .
Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene.*/

var animal,peso,temperatura;
var respuesta=true;
var contTemPares=0,contPeso=0,contAniCero=0;
var bandera=true;
var acumPeso=0;
var max;

while(respuesta==true)
{
	do
	{
		animal=prompt("Ingrese nombre de un animal");
		peso=prompt("Ingrese el peso");
		peso=parseInt(peso);
		contPeso++;
	} while (isNaN(peso) || (peso<1 || peso>1000));
	do
	{
		temperatura=prompt("Ingrese la temperatura");
	} while (isNaN(temperatura) || (temperatura<-30 || temperatura>30))

	acumPeso+=peso;

	if (temperatura%2==0)
	{
		contTemPares++;
	}
	if (bandera)
	{
		bandera=false;
		max=peso;
	} else 
	{
		if (peso>max)
		{
			max=peso;
		}
	}
	if (temperatura<0)
	{
		contAniCero++;
	}

	promedio=acumPeso/contPeso;
	respuesta=confirm("¿quiere seguir?");
}
	document.write("Cantidad de temperaturas pares: "+contTemPares+", Nombre y temperatura del animal mas pesado: "+animal+temperatura+max+", Cantidad de animales que viven bajo cero: "+contAniCero+", Promedio de todos los pesos de los animales: "+promedio);
}
