function mostrar()
{
	/*var importe1;
	var importe2;
	var importe3;
	var importe4;

	importe1=prompt("Ingrese el primer importe: ");
	importe2=prompt("Ingrese el segundo importe");
	importe3=prompt("Ingrese el tercer importe");
	importe4=prompt("Ingrese el cuarto importe");

	importe1=parseInt(importe1);
	importe2=parseInt(importe2);
	importe3=parseInt(importe3);
	importe4=parseInt(importe4);

	if (importe1>100) 
		{
			descuento=importe1*0.10;
			total1=importe1-descuento;
		} else 
		{
			if (importe1>50) 
				{
					descuento=importe1*0.5;
					total1=importe1-descuento;
				} else 
				{
					descuento=importe1*0.15;
					total1=importe1+descuento;
				}
		}
	if (importe2>100) 
		{
			descuento2=importe2*0.10;
			total2=importe2-descuento2;
		} else 
		{
			if (importe2>50) 
				{
					descuento2=importe2*0.5;
					total2=importe2-descuento2;
				} else 
				{
					descuento2=importe2*0.15;
					total2=importe2+descuento2;
				}
		}

	if (importe3>100) 
		{
			descuento3=importe3*0.10;
			total3=importe3-descuento3;
		} else 
		{
			if (importe3>50) 
				{
					descuento3=importe3*0.5;
					total3=importe3-descuento3;
				} else 
				{
					descuento3=importe3*0.15;
					total3=importe3+descuento3;
				}
		}

	if (importe4>100) 
		{
			descuento4=importe4*0.10;
			total4=importe4-descuento4;
		} else 
		{
			if (importe4>50) 
				{
					descuento4=importe4*0.5;
					total4=importe4-descuento4;
				} else 
				{
					descuento4=importe4*0.15;
					total4=importe4+descuento4;
				}
		}

		alert("Importe 1: "+total1+", importe 2: "+total2+", importe 3: "+total3+", importe 4: "+total4);*/
	/*
	switch(importe1)
	{
		case >100:
		descuento=importe1*0.10;
		break
		case >50:
		descuento=importe1*0.5;
		break
		case <50;
		descuento=importe1*0.15;
		break
	}

	switch(importe2)
	{
		case >100:
		descuento2=importe2*0.10;
		break
		case >50:
		descuento2=importe2*0.5;
		break
		case <50:
		descuento2=importe3*0.15;
		break
	}
	*/ 
	
	var dia=prompt("Ingrese un dia de la semana");
	var mensaje;

	switch(dia)
	{
		case "sabado":
		case "domingo":
			mensaje="buen finde!!";
		break
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje="a trabajar!!";
		break
		default:
			mensaje="no es un dia habil";
		break
	}

	alert(mensaje);

}
