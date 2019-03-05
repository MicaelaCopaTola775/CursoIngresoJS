function mostrar()
{
	var respuesta=true;
	var num;
	var contNeg=0,contPos=0,contCeros=0,contPares=0;
	var acumNeg=0,acumPos=0;

	while(respuesta==true)
	{
		do
		{
			num=prompt("Ingrese el numero");
			num=parseInt(num);
		} while(isNaN(num));

		if (num<0) 
		{
			contNeg++;
			acumNeg+=num;
		} else 
		{
			if (num>0)
			{
				contPos++;
				acumPos+=num;
			} else 
			{
				contCeros++;
			}
		}

		if (num%2==0) 
		{
			contPares++;
		}

		promedioPos=acumPos/contPos;
		promedioNeg=acumNeg/contNeg;
		diferencia=acumPos-acumNeg;

		respuesta=confirm("¿quiere seguir?");
	}
document.write(" Suma de los negativos: "+acumNeg+", Suma de los positivos: "+acumPos+", Cantidad de Positivos: "+contPos+", Cantidad de negativos: "+contNeg+", Cantidad de ceros: "+contCeros+", Cantidad de pares: "+contPares+", Promedio de positivos: "+promedioPos+", Promedio de negativos: "+promedioNeg+", Diferencia entre positivos y negativos: "+diferencia)
}//FIN DE LA FUNCIÓN