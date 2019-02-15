function mostrar()
{
  var precio;
  var porcentaje;
  var descuento;
  var porcentajeiva;

  precio=prompt("Ingrese el el precio de su compra");

  precio=parseInt(precio);

  porcentaje=precio*10/100;

  descuento=precio-porcentaje;

  porcentajeiva=descuento*21/100;

  total=descuento+porcentajeiva;

  alert("Tu compra es de $"+precio+",tenes un descuento del %10 queda en $"+descuento+", mas el IVA es $"+total)
  
}
