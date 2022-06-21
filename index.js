// Determina el tipo de hamburguesa
function tipoHamburguesa() {
    let tipo = parseInt(
        prompt(
            `Indica la hamburguesa que queres:\n
            1 - Hamburguesa Americana (Valor $920,00)\n
            2 - Hamburguesa Deluxe (Valor $910,00)\n
            3 - Hamburguesa Cuatro Quesos (Valor $900,00)\n
            4 - Hamburguesa Clasica (Valor $880,00)\n`
        )
    );
    return tipo;
}

//Determina el valor de las hamburguesas
function valorHamburguesa(hamburguesa) {
    switch (hamburguesa) {
        case 1:
            return 920;
            break;
        case 2:
            return 910;
            break;
        case 3:
            return 900;
            break;
        case 4:
            return 880;
            break;
        default:
            return 0;
            break;
    }
}

// Determina la cantidad de hamburguesas
function cantidadHamburguesas() {
    cantidad = parseInt(prompt(`Indica la cantidad de hamburguesas: `));
    return cantidad;
}

//Determina el valor TOTAL (sin gastos de envio y sin descuento)
function carrito() {
    let totalCarrito = 0;
    let eleccion = "si";
    while (eleccion === "si" || eleccion === "SI" || eleccion === "Si") {
        let valorCarrito = valorHamburguesa(tipoHamburguesa());
        let cantidadCarrito = cantidadHamburguesas();
        let subTotalCarrito = valorCarrito * cantidadCarrito;
        totalCarrito = totalCarrito + subTotalCarrito;
        eleccion = prompt(`¿Queres agregar algo mas al pedido?\n
        - Si\n
        - No`);
    }
    return totalCarrito;
}

//Determina descuento por promocion
function cuponDescuento(costoConDescuento) {
    let cupon = prompt(`¿Tenes cupon de descuento?:`);
    if (cupon == "si" || cupon == "SI" || cupon == "Si") {
        alert("Se aplicara un descuento del 10%")
        let descuento = costoConDescuento * 0.90;
        return (descuento);
    } else {
        alert("No se aplicaran descuentos")
        let descuento = costoConDescuento;
        return (descuento);
    }
}

//Determina costos de envio
function costoEnvio(costoSinRecargo) {
    let ubicacion = parseInt(
        prompt(`Indica si retiras el pedido en nuestro local o te lo enviamos a domicilio (Costo de envio: $200,00):\n
        1 - Envio a domicilio\n
        2 - Retiro en nuestro local`)
    );
    while (ubicacion != 1 && ubicacion != 2) {
        alert(`La opcion que seleccionaste es incorrecta. Volve a intentarlo`);
        ubicacion = parseInt(
            prompt(`Indica si retiras el pedido en nuestro local o te lo enviamos a domicilio (Costo de envio: $200,00):\n
            1 - Envio a domicilio\n
            2 - Retiro en nuestro local`));
    }
    if (ubicacion == 1) {
        alert(`Te lo enviamos a tu casa`);
        let costoEnvio = 200;
        let CostoConRecargo = costoSinRecargo + costoEnvio
        return CostoConRecargo;
    } else {
        alert(`Retiras por nuestro local`);
        let costoEnvio = 0;
        let CostoConRecargo = costoSinRecargo + costoEnvio
        return CostoConRecargo;
    }
}


let costoTotal = costoEnvio(cuponDescuento(carrito()));
costoTotal = costoTotal.toFixed(2);
alert(`El total a abonar es: $${costoTotal}\n
GRACIAS POR TU COMPRA`);
