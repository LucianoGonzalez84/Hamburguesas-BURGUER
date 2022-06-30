// Lista de productos
const productos = [
    { id: 1, nombre: "Hamburguesa Americana", precio: 920 },
    { id: 2, nombre: "Hamburguesa Deluxe", precio: 910 },
    { id: 3, nombre: "Hamburguesa Cuatro Quesos", precio: 910 },
    { id: 4, nombre: "Hamburguesa Clasica", precio: 880 },
];

// Objeto Constructor
class producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Con la siguiente funcion se agrega un objeto nuevo al array mediante la utilizacion del Objeto constructor. En primera instancia nos indica cual es el ultimo elemento agregado
function agregarProducto() {
  let decision = "si";
  while (decision === "si") {
    alert(`Ultimo producto agregado:\nID: ${productos[productos.length-1].id}\nNombre: ${productos[productos.length-1].nombre}\nPrecio: ${productos[productos.length-1].precio}\n`);
    let id = parseInt(prompt("Ingrese ID del producto: "));
    let nombre = prompt("Ingrese nombre del producto: ");
    let precio = parseInt(prompt("Ingrese precio del producto: ")).toFixed(2);
    productos.push(new producto(id, nombre, precio));
    decision = prompt("Desea agregar un nuevo producto: ").toLowerCase();
  }
}

console.log(productos);
agregarProducto();
console.log(productos);


/*
// Determina el tipo de hamburguesa
function tipoHamburguesa() {
    let tipo = parseInt(
        prompt(
            `Indica la hamburguesa que queres:\n
            ${productos[0].id} - ${productos[0].nombre} (Valor $${productos[0].precio.toFixed(2)})\n
            ${productos[1].id} - ${productos[1].nombre} (Valor $${productos[1].precio.toFixed(2)})\n
            ${productos[2].id} - ${productos[2].nombre} (Valor $${productos[2].precio.toFixed(2)})\n
            ${productos[3].id} - ${productos[3].nombre} (Valor $${productos[3].precio.toFixed(2)})\n`
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
*/







