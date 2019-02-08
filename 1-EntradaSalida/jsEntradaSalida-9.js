/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var primerNumero;
	var porcentaje;
	var sueldoFinal;

	primerNumero=sueldo.value
	sueldoFinal=resultado.value

	primerNumero= parseInt(primerNumero);
	sueldoFinal= parseInt(sueldoFinal);

	porcentaje= primerNumero*10/100;

	sueldoFinal= primerNumero+porcentaje;

	resultado.value=sueldoFinal

	//document.getElementById('resultado')=sueldoFinal

}
