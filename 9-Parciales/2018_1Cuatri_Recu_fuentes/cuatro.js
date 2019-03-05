function mostrar()
{
	/*var precio;
	var libros;
	var porcentajeDes;
	var descuento;
	var porcentajeTar;
	var recargo;

	libros=prompt("Ingrese la cantidad de libros");
	precio=prompt("Ingrese el precio de cada libro");
	pago=prompt("¿Usted pagara con tarjeta o en efectivo");

	precio=parseInt(precio);
	libros=parseInt(libros);
	porcentajeDes=parseInt(porcentajeDes);
	descuento=parseInt(descuento);
	porcentajeTar=parseInt(porcentajeTar);
	recargo=parseInt(recargo);

	compra=precio*libros

	if (libros>2) 
	{
		porcentajeDes=compra*10/100;
		descuento=compra-porcentajeDes;

	} else 
	{
		if (compra>2000) 
			{
				porcentajeDes=compra*15/100;
				descuento=compra-porcentajeDes;
			} else 
			{
				if (pago=="tarjeta") 
				{
					porcentajeTar=descuento*10/100;
					recargo=descuento+porcentajeTar;
				}

			}			
 	alert("Usted compró "+libros+" libros y el precio de cada libro es de $"+precio+", el total a pagar es de $"+compra+". Al hacerle el descuento su total quedo en $"+descuento)
}*/

var num1=prompt("Ingrese el primer numero");
var num2=prompt("Ingrese el segundo numero");
var mensaje;
var suma;

num1=parseInt(num1);
num2=parseInt(num2);

if (num1==num2) 
	{
		mensaje=num1+" "+num2;
	} else 
	{
		if (num1>num2) 
			{
				mensaje=num1/num2;
			} else 
			{

				suma=num1+num2;
				mensaje=suma;
			}
	}

if (suma<50) 
	{
		mensaje="la suma es "+suma+" y es menor a 50"
	}

alert(mensaje);

}

