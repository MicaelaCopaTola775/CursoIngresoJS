function mostrar()
{
	var letra;
	var num,respuesta=true;
	var contPares=0,contImpares=0,contCeros=0,contNeg=0,contPos=0;
	var promedio;
	

	while(respuesta==true)
	{
		do
		{
			letra=prompt("Ingrese la letra");
			num=prompt("Ingrese el número");
			num=parseInt(num);
		} while(num>-100&&num<100);

		if(num%2==0)
		{
			contPares++;
		}else 
		{
			if (num) 
			{
				contImpares++;
			} 
		}
		if(num<0)
		{
			acumNeg+=num;
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

		respuesta=confirm();

	}

	document.write("La cantidad de números pares es "+contPares+". La cantidad de positivos es "+acumPos)

}
