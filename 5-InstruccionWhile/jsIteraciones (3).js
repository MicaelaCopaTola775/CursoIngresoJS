function mostrar()
{
	var clave=prompt("Ingrese la clave");
	var cont=0

	while(cont<4)
	{
		cont++;

		if (clave!="utn750")
		{
			clave=prompt("Ingrese la clave");
		} else 
		{
			break
		}
	}

}//FIN DE LA FUNCIÓN
