function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	var num;


///document.getElementById('suma').value=acumulador;
//document.getElementById('promedio').value=acumulador/contador;

	while(respuesta==true)
	{
		contador++;
		do
		{
			num=prompt("Ingrese el número");
			num=parseInt(num);
			
		}while(num="NaN");

	acumulador+=num;
	respuesta=confirm();

	} 

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
	//respuesta=confirm();
}//FIN DE LA FUNCIÓN