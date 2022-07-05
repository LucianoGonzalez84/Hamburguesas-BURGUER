/*
CODIGO 
PARA 
EL 
CLIENTE
*/

//Lista de productos total
const listaProductos = [
    // Hamburgesas Simples
    { id: 1, nombre: "Hamburguesa americana simple", precio: 930, tipo: "simple", ingredientes: "medallón de carne, cebolla, barbacoa, cheddar, panceta, huevo a la plancha", img: "./assets/img/hamburguesa.jpg" },
    { id: 2, nombre: "Hamburguesa deluxe simple", precio: 920, tipo: "simple", ingredientes: "medallón de carne, rúcula, tomates hidratados en vino blanco, queso suizo, cebolla morada, salsa alioli", img: "./assets/img/hamburguesa.jpg" },
    { id: 3, nombre: "Hamburguesa cuatro quesos simple", precio: 900, tipo: "simple", ingredientes: "medallón de carne, pasta de roquefort, mozzarella, queso tybo, crema de cheddar.", img: "./assets/img/hamburguesa.jpg" },
    { id: 4, nombre: "Hamburguesa mexicana simple", precio: 900, tipo: "simple", ingredientes: "medallón de carne, cheddar, lechuga, tomate, cebolla, guacamole, salsa dragón", img: "./assets/img/hamburguesa.jpg" },
    { id: 5, nombre: "Hamburguesa queso azul simple", precio: 900, tipo: "simple", ingredientes: "medallón de carne, cebolla colorada, hongos rehogados, roquefort, mozzarella", img: "./assets/img/hamburguesa.jpg" },
    { id: 6, nombre: "Hamburguesa clasica simple", precio: 880, tipo: "simple", ingredientes: "medallón de carne, lechuga, tomate, queso provolone, tybo, mayonesa, ketchup", img: "./assets/img/hamburguesa.jpg" },
    { id: 7, nombre: "Hamburguesa de pollo simple", precio: 880, tipo: "simple", ingredientes: "medallón de pollo, colchón de hojas verdes, tomates , queso suizo, salsa alioli", img: "./assets/img/hamburguesa.jpg" },
    { id: 8, nombre: "Hamburguesa de cheddar y panceta simple", precio: 880, tipo: "simple", ingredientes: "medallón de carne, cheddar, panceta", img: "./assets/img/hamburguesa.jpg" },
    // Hamburguesas Dobles
    { id: 9, nombre: "Hamburguesa americana doble", precio: 1120, tipo: "doble", ingredientes: "doble medallón de carne, cebolla, barbacoa, cheddar, panceta, huevo a la plancha", img: "./assets/img/hamburguesa.jpg" },
    { id: 10, nombre: "Hamburguesa deluxe doble", precio: 1090, tipo: "doble", ingredientes: "doble medallón de carne, rúcula, tomates hidratados en vino blanco, queso suizo, cebolla morada, salsa alioli", img: "./assets/img/hamburguesa.jpg" },
    { id: 11, nombre: "Hamburguesa cuatro quesos doble", precio: 1070, tipo: "doble", ingredientes: "doble medallón de carne, pasta de roquefort, mozzarella, queso tybo, crema de cheddar.", img: "./assets/img/hamburguesa.jpg" },
    { id: 12, nombre: "Hamburguesa mexicana doble", precio: 1085, tipo: "doble", ingredientes: "doble medallón de carne, cheddar, lechuga, tomate, cebolla, guacamole, salsa dragón", img: "./assets/img/hamburguesa.jpg" },
    { id: 13, nombre: "Hamburguesa queso azul doble", precio: 1075, tipo: "doble", ingredientes: "doble medallón de carne, cebolla colorada, hongos rehogados, roquefort, mozzarella", img: "./assets/img/hamburguesa.jpg" },
    { id: 14, nombre: "Hamburguesa clasica doble", precio: 1065, tipo: "doble", ingredientes: "doble medallón de carne, lechuga, tomate, queso provolone, tybo, mayonesa, ketchup", img: "./assets/img/hamburguesa.jpg" },
    { id: 15, nombre: "Hamburguesa de pollo doble", precio: 1080, tipo: "doble", ingredientes: "doble medallón de pollo, colchón de hojas verdes, tomates , queso suizo, salsa alioli", img: "./assets/img/hamburguesa.jpg" },
    { id: 16, nombre: "Hamburguesa de cheddar y panceta doble", precio: 1085, tipo: "doble", ingredientes: "doble medallón de carne, cheddar, panceta", img: "./assets/img/hamburguesa.jpg" },
    // Hamburguesas Vegetarianas
    { id: 17, nombre: "Hamburguesa vegetariana simple", precio: 920, tipo: "vegetariana", ingredientes: "medallón de lentejas, cebolla colorada, rúcula, mozarella, queso provolone, pasta de berenjenas", img: "./assets/img/hamburguesa.jpg" },
    { id: 18, nombre: "Hamburguesa vegetariana doble", precio: 1050, tipo: "vegetariana", ingredientes: "doble medallón de lentejas, cebolla colorada, rúcula, mozarella, queso provolone, pasta de berenjenas", img: "./assets/img/hamburguesa.jpg" },
    // Hamburguesas Sin TACC
    { id: 19, nombre: "Hamburguesa simple sin TACC", precio: 1000, tipo: "sin tacc", ingredientes: "medallón de carne, cheddar, panceta, pan sin TACC", img: "./assets/img/hamburguesa.jpg" },
    { id: 20, nombre: "Hamburguesa doble sin TACC", precio: 1080, tipo: "sin tacc", ingredientes: "doble medallón de carne, cheddar, panceta, pan sin TACC", img: "./assets/img/hamburguesa.jpg" },
]

// Objeto Constructor
class producto {
    constructor(id, nombre, precio, ingredientes) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
    }
}

// Con la siguiente funcion se agrega un objeto nuevo al array mediante la utilizacion del Objeto constructor. En primera instancia nos indica cual es el ultimo elemento agregado
function agregarProducto() {
    let decision = "si";
    while (decision === "si") {
        alert(`Ultimo producto agregado:\nID: ${listaProductos[listaProductos.length - 1].id}\nNombre: ${listaProductos[listaProductos.length - 1].nombre}\nPrecio: ${listaProductos[listaProductos.length - 1].precio}\nIngredientes: ${listaProductos[listaProductos.length - 1].ingredientes}`);
        let id = parseInt(prompt("Ingrese ID del producto: "));
        let nombre = prompt("Ingrese nombre del producto: ");
        let precio = parseInt(prompt("Ingrese precio del producto: ")).toFixed(2);
        let ingredientes = prompt("Ingrese los ingredientes del producto: ");
        listaProductos.push(new producto(id, nombre, precio, ingredientes));
        decision = prompt("Desea agregar un nuevo producto: ").toLowerCase();
    }
}


/*
CODIGO 
PARA 
EL 
USUARIO
*/

let encabezado = document.getElementById("encabezado");
encabezado.className = "encabezado";

let hamburguesas = document.getElementById("hamburguesas");
hamburguesas.className = "hamburguesas";

let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");

/* Filtros */

// Filtro por tipo de hamburguesa
function filtrarPorTipo(productos) {
    let eleccionTipo = "si";
    while (eleccionTipo === "si") {
        let eleccion = parseInt(prompt(`Indica el tipo de hamburguesa que queres:\n1 - Simple\n2 - Doble\n3 - Vegetariana\n4 - Sin TACC`));
        switch (eleccion) {
            case 1:
                tipo = "simple"
                const simple = productos.filter(elemento => elemento.tipo.includes(tipo));
                return simple;
            case 2:
                tipo = "doble"
                const doble = productos.filter(elemento => elemento.tipo.includes(tipo));
                return doble;
            case 3:
                tipo = "vegetariana"
                const vegetariana = productos.filter(elemento => elemento.tipo.includes(tipo));
                return vegetariana;
            case 4:
                tipo = "sin tacc"
                const sinTACC = productos.filter(elemento => elemento.tipo.includes(tipo));
                return sinTACC;
            default:
                alert("La opcion seleccionanda no existe");
                break;
        }
    }
}

// Filtro por precio de hamburguesa
function filtrarPorPrecio(productos) {
    let eleccionPrecio = "si";
    while (eleccionPrecio === "si") {
        let precioMaximo = parseInt(prompt("Indica el precio maximo de tu hamburguesa: "));
        const filtroPrecioMaximo = productos.filter(elemento => elemento.precio <= precioMaximo);
        filtroPrecioMaximo.push(precioMaximo);
        if (filtroPrecioMaximo.length === 0) {
            alert("No existe ninguna hamburguesa para el precio que indicaste");
        } else {
            return filtroPrecioMaximo;
        }
    }
}

// Filtro por ingredientes de hamburguesas
function filtrarPorIngredientes(productos) {
    let eleccionIngrediente = "si";
    while (eleccionIngrediente === "si") {
        let ingrediente = prompt("Indica el ingrediente: ").toLowerCase();
        const ingredientes = productos.filter(elemento => elemento.ingredientes.includes(ingrediente));
        if (ingredientes.length === 0) {
            alert("El ingrediente indicado no existe");
        } else {
            return ingredientes;
        }
    }
}

// Devuelve un objeto (Hamburguesa), de acuerdo al filtro seleccionado
function elegirHamburguesa(arreglo) {
    titulo.innerText = "LISTADO DE HAMBURGUESAS";
    subtitulo.innerText = "Selecciona tu hamurguesa favorita"
    for (const producto of arreglo) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `<h3>${producto.nombre}</h3>
                           <img src=${producto.img} alt="hamburguesa">
                           <h4>PRECIO = $${producto.precio.toFixed(2)}</h4>
                           <p><b>Ingredientes:</b> ${producto.ingredientes}</p>
                           <button>COMPRAR</button>`
        hamburguesas.append(tarjeta);
    }
}

// Selecciona el tipo de filtro requerido por el usuario
function elegirFiltro() {
    let opcionFiltros = "si";
    while (opcionFiltros === "si") {
        let eleccionFiltro = parseInt(prompt("Queres aplicar algun filtro:\n1 - Para aplicar filtro\n2 - Lista de hamburguesas sin filtros"));
        if (eleccionFiltro === 1) {
            let elegirOpcion = parseInt(prompt("Indica el numero correspondiente al filtro que queres aplicar:\n1 - Filtrar por tipo de hamburguesa\n2 - Filtrar por precio maximo de la hamburguesa\n3 - Filtrar por ingredientes de la hamburguesa"));
            switch (elegirOpcion) {
                case 1:
                    return elegirHamburguesa(filtrarPorTipo(listaProductos));
                case 2:
                    return elegirHamburguesa(filtrarPorPrecio(listaProductos));
                case 3:
                    return elegirHamburguesa(filtrarPorIngredientes(listaProductos));
                default:
                    alert("Opcion seleccionada incorrecta")
                    break;
            }
        } else if (eleccionFiltro === 2) {
            return elegirHamburguesa(listaProductos);
        } else {
            alert("Opcion incorrecta. Por favor volve a seleccionar");
        }
    }
}

/* Carrito de compra */

// Funcion que devuelve un array con los productos seleccionados por el cliente + la suma total de los precios de cada producto en el ultimo indice
function carritoCompra() {
    alert(`BIENVENIDO A HAMBURGUESAS **********\nA continuacion selecciona las hamburguesas que queres.`)
    let carrito = [];
    let opcionCarrito = 1;
    while (opcionCarrito === 1) {
        let tipoHamburguesa = elegirFiltro();
        let cantidadHamburguesas = parseInt(prompt(`¿Cuantas - ${tipoHamburguesa.nombre} - queres?: `));
        for (let i = 0; i < cantidadHamburguesas; i++) {
            carrito.push(tipoHamburguesa);
        }
        opcionCarrito = parseInt(prompt(`¿Queres seguir comprando?:\n1 - Si\n2 - No`));
    }
    let totalCarrito = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
    carrito.push(totalCarrito);
    return carrito
}

// Funcion que devuelve el precio teniendo en cuenta descuentos por cupon
function carritoConDescuento(carrito) {
    let cupon = parseInt(prompt(`¿Tenes cupon de descuento?:\n1 - Si\n2 - No`));
    if (cupon === 1) {
        alert("Se aplica descuento del 10%");
        let descuento = carrito[carrito.length - 1] * 0.9;
        carrito[carrito.length - 1] = descuento;
        return carrito;
    } else {
        alert("No se aplica descuento");
        let descuento = carrito[carrito.length - 1] * 1;
        carrito[carrito.length - 1] = descuento;
        return carrito;
    }
}

// Funcion que devuelve el precio teniendo en cuenta costos de envio
function costoEnvio(carrito) {
    let ubicacion = parseInt(
        prompt(`Indica si retiras el pedido en nuestro local o te lo enviamos a domicilio (Costo de envio: $200,00):
        1 - Envio a domicilio
        2 - Retiro en nuestro local`)
    );
    while (ubicacion != 1 && ubicacion != 2) {
        alert(`La opcion que seleccionaste es incorrecta. Volve a intentarlo`);
        ubicacion = parseInt(
            prompt(`Indica si retiras el pedido en nuestro local o te lo enviamos a domicilio (Costo de envio: $200,00):
            1 - Envio a domicilio
            2 - Retiro en nuestro local`));
    }
    if (ubicacion == 1) {
        alert(`Te lo enviamos a tu casa`);
        let costoEnvio = carrito[carrito.length - 1] + 200;
        carrito[carrito.length - 1] = costoEnvio;
        return carrito;
    } else {
        alert(`Retiras por nuestro local`);
        let costoEnvio = carrito[carrito.length - 1] + 0;
        carrito[carrito.length - 1] = costoEnvio;
        return carrito;
    }
}

// Funcion total a pagar
function principal(carrito) {
    let mensajeFinal = `SU PEDIDO:\n`
    for (let i = 0; i < carrito.length - 1; i++) {
        mensajeFinal = mensajeFinal + `   1 - ${carrito[i].nombre}\n`;
    }
    mensajeFinal = mensajeFinal + `\nTOTAL A PAGAR = $${carrito[carrito.length - 1].toFixed(2)}`;
    alert(mensajeFinal)
}

//Llamado de funcion total a pagar
principal(costoEnvio(carritoConDescuento(carritoCompra())));