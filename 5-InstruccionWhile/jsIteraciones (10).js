function mostrar()
{
	var num,respuesta=true;
	var acumNeg=0,acumPos=0;
	var contNeg=0,contPos=0,contCeros=0,contPares=0;
	//declarar contadores y variables 

	while(respuesta==true)
	{
		do
		{
			num=prompt("Ingrese el número");
			num=parseInt(num);
		} while (esNaN(num));

		if(num<0)
		{
			acumNeg=acumNeg+num;
			contNeg++;
		} else 
		{
			if(num>0)
			{
				acumPos+=num;
				contPos++;
			} else 
			{
				contCeros++;
			}
		}
	
	if(num%2==0)
	{
		contPares++;
	}

	respuesta=confirm();

	}

	document.write("");

}//FIN DE LA FUNCIÓN