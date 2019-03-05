function mostrar()
{
	var cont=0,contPares=0,contImpares=0;
	var num,letra;
	var respuesta=true;
	var bandera=true;

	while(respuesta==true)
	{
		do
		{
			letra=prompt("Ingrese una letra");
			num=prompt("Ingrese un numero");
			num=parseInt(num);
		} while(isNaN(num) || (num<-100 || num>100))

		if (num%2 == 0)
		{
			contPares++;
		} else 
		{
			contImpares++;
		}
		

		respuesta=confirm("¿quiere seguir?");
	}

}
