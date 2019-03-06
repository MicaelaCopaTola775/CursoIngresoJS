function mostrar()
{
	var contCeros=0,contPares=0,contImpares=0,contPos=0,contNeg=0;
	var num,letra;
	var respuesta=true;
	var bandera=true;
	var acumPos=0,acumNeg=0;

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
		if (num>0)
		{
			contPos++;
			acumPos+=num;
		} else 
		{
			if (num<0)
			{
				contNeg++;
				acumNeg+=num;
			} else 
			{
				contCeros++;
			}
		}

		if (bandera)
		{
			bandera=false;
			max=num;
			min=num;
		} else
		{
			if (num>max)
			{
				max=num;
			}
			if (num<min)
			{
				min=num;
			}
		}

		promedioPos=acumPos/contPos;
		respuesta=confirm("¿quiere seguir?");
	}

	document.write("Cantidad de  numeros pares: "+contPares+", Cantidad de numeros impares: "+contImpares+", Cantidad de ceros: "+contCeros+", Promedio de numeros positivos: "+promedioPos+", Suma de numeros negativos: "+acumNeg+", Numeros y letra del maximo: "+max+letra+", Numero y letra del minimo: "+min+letra);

}
