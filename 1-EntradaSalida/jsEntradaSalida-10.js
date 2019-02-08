/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var primerNumero;
	var porcentaje;
	var sueldoFinal;

	primerNumero=importe.value
	sueldoFinal=resultado.value

	primerNumero= parseInt(primerNumero);
	sueldoFinal= parseInt(sueldoFinal);

	porcentaje= primerNumero*25/100;

	sueldoFinal= primerNumero-porcentaje;

	resultado.value=sueldoFinal

}
