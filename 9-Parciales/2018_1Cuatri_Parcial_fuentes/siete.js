function mostrar()
{
	var cont=0;
	var sexo;
	var nota;
	var max;


	while(cont<5)
	{
		cont++;
		do
		{
			sexo=prompt("Ingrese su sexo");
		} while(sexo!="m"&&sexo!="f");
		do
		{
			nota=prompt("Ingrese su nota");
			nota=parseInt(nota);
		} while(esNaN(nota)&&(nota<0&&nota>10));
		
		promedio=nota/cont;

		if(nota>max)
		{

		}
		
	}
}
