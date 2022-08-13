/*
SE INICIAN VARIABLES
*/

let productosPedido = JSON.parse(localStorage.getItem("carrito"));
let ultimaCompra = [];
let costoEnvio = 250;
crearNodo("#pedido-total").innerText = (productosPedido.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0)).toFixed(2);
crearNodo("#monto-abonar").innerText = (productosPedido.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0)).toFixed(2);

/*
FUNCIONES
*/

// Funcion que crea nodo
function crearNodo(selector) {
    return document.querySelector(selector);
};

// Funcion que crea etiqueta html
function crearEiqueta(elemento) {
    return document.createElement(elemento);
}

// Funcion que elimina productos del pedido
const eliminarProductoPedido = (productoId) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'boton_no_eliminar',
            cancelButton: 'boton_eliminar'
        },
        buttonsStyling: false
    })
    let DOMhamburguesa = productosPedido.find(
        (hamburguesa) => hamburguesa.id === productoId
    );
    swalWithBootstrapButtons.fire({
        html: `
             <div class="sweetAlert">
                 <i class="fas fa-exclamation-circle"></i>
                 <h3>Queres eliminar <span>${DOMhamburguesa.nombre}</span> del pedido</h3>
             </div>    
             `,
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                position: 'center',
                html: `
                      <div class="sweetAlert">
                      <i class="fas fa-check-circle"></i>
                          <h3>Se elimino <span>${DOMhamburguesa.nombre}</span></h3>
                      </div>
                      `,
                showConfirmButton: false,
                timer: 1500
            });
            let indice = productosPedido.indexOf(DOMhamburguesa);
            productosPedido.splice(indice, 1);
            DOMhamburguesa.cantidad = 1;
            localStorage.setItem("carrito", JSON.stringify(productosPedido));
            agregarProductosPedido(productosPedido);
            if (seleccionEntrega() === "domicilio") {
                if (productosPedido.length > 0) {
                    crearNodo("#pedido-total").innerText = (productosPedido.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0) + costoEnvio).toFixed(2);
                    crearNodo("#monto-abonar").innerText = (productosPedido.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0) + costoEnvio).toFixed(2);
                } else {
                    crearNodo("#pedido-total").innerText = (productosPedido.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0)).toFixed(2);
                };
            };
            if (productosPedido.length === 0) {
                Swal.fire({
                    html: `
                    <div class="sweetAlert">
                        <i class="fas fa-exclamation-circle"></i>
                        <h3>No hay productos en tu pedido<br><b>No es posible finalizar tu compra!</b></h3>
                        <h3>Volviendo a la tienda <span id="conteo">3</span> ...</h3>
                    </div>
                    `,
                    showConfirmButton: false,
                    timer: 4000,
                });
                let DOMconteo = document.getElementById("conteo");
                setTimeout(function () { DOMconteo.innerText = 2 }, 1000);
                setTimeout(function () { DOMconteo.innerText = 1 }, 2000);
                setTimeout(function () { DOMconteo.innerText = 0 }, 3000);
                setTimeout(function () {
                    location.href = "./index.html#catalogo-productos";
                }, 4000);
            }
        };
    });
};

// Funcion que renderiza los productos del pedido
const agregarProductosPedido = (productos) => {
    let DOMpedido = crearNodo("#productos");
    DOMpedido.innerHTML = "";
    productos.forEach(elemento => {
        let DOMtemplatePedido = crearEiqueta("div");
        DOMtemplatePedido.innerHTML = ` 
                                <p>${elemento.nombre}</p>
                                <p>Precio: $${elemento.precioUnitario.toFixed(2)}</p>
                                <p>Cantidad: ${elemento.cantidad}</p>
                                <button id="eliminar${elemento.id}"><i class="fas fa-trash-alt"></i></button>`
        DOMpedido.appendChild(DOMtemplatePedido);
        DOMtemplatePedido.classList = "producto";
        DOMpedido.classList = "productos";
        let DOMboton = crearNodo(`#eliminar${elemento.id}`);
        DOMboton.addEventListener("click", () => {
            eliminarProductoPedido(elemento.id);
        });
        localStorage.setItem("carrito", JSON.stringify(productos));
    });
    crearNodo("#pedido-subTotal").innerText = productos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0).toFixed(2);
}

// Funcion que seleccion opcion forma de entrega
const seleccionEntrega = () => {
    let DOMentrega = crearNodo("#entrega").value;
    if (DOMentrega === "domicilio") {
        crearNodo("#datos-domicilio").classList.remove("inactivo");
        crearNodo("#datos-domicilio").classList.add("datos_domicilio");
        crearNodo("#pedido-total").innerText = (productosPedido.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0) + costoEnvio).toFixed(2);
        crearNodo("#monto-abonar").innerText = (productosPedido.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0) + costoEnvio).toFixed(2);
    } else if (DOMentrega != "domicilio") {
        crearNodo("#datos-domicilio").classList.remove("datos_domicilio");
        crearNodo("#datos-domicilio").classList.add("inactivo")
        crearNodo("#pedido-total").innerText = (productosPedido.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0)).toFixed(2);
        crearNodo("#monto-abonar").innerText = (productosPedido.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0)).toFixed(2);
    }
    return DOMentrega;
}

// Funcion que selecciona opcion horario de entrega
const seleccionHorario = () => {
    let DOMhorario = crearNodo("#horario").value;
    return DOMhorario;
}

// Funcion que selecciona opcion forma de pago
const seleccionPago = () => {
    let DOMpago = crearNodo("#pago").value;
    if (DOMpago === "efectivo") {
        crearNodo("#pago-efectivo").classList.remove("inactivo");
        crearNodo("#pago-efectivo").classList.add("pago_efectivo");
    } else if (DOMpago != "domicilio") {
        crearNodo("#pago-efectivo").classList.remove("pago_efectivo");
        crearNodo("#pago-efectivo").classList.add("inactivo");
    }
    return DOMpago;
};

/*
EVENTOS
*/

document.addEventListener("DOMContentLoaded", () => {
    //Se insertan los productos en el pedido
    agregarProductosPedido(productosPedido);
});

// Lanza el loader
// setTimeout(function () {
//     let DOMcontenedorLoader = crearNodo(".contenedor_loader");
//     DOMcontenedorLoader.classList.remove("contenedor_loader")
//     DOMcontenedorLoader.classList.add("inactivo")
// }, 2000);

// Formulario
crearNodo("#datos-pedido").addEventListener("submit", function (e) {
    e.preventDefault();
    let datosPedido = [];
    let DOMformaEntrega = seleccionEntrega();
    datosPedido.push({"forma de entrega":DOMformaEntrega});
    if (DOMformaEntrega === "domicilio") {
        let DOMcalle = crearNodo("#calle").value;
        datosPedido.push({"calle":DOMcalle});
        let DOMentreCalles = crearNodo("#entreCalles").value;
        datosPedido.push({"entre calles":DOMentreCalles});
        let DOMdetalle = crearNodo("#detalle").value;
        datosPedido.push({"detalle":DOMdetalle});
    }
    let DOMseleccionHorario = seleccionHorario();
    datosPedido.push({"horario de entrega":DOMseleccionHorario});
    let DOMformaPago = seleccionPago();
    datosPedido.push({"forma de pago":DOMformaPago});
    if (DOMformaPago === "efectivo") {
        let DOMmontoPago = crearNodo("#montoPago").value;
        datosPedido.push({"monto pago":DOMmontoPago});
    }
    let DOMnombre = crearNodo("#nombre").value;
    datosPedido.push({"nombre":DOMnombre});
    let DOMtelefono = crearNodo("#telefono").value;
    datosPedido.push({"telefono":DOMtelefono});
    // Trabajo sobre localStorage
    localStorage.setItem("ultimaCompra", JSON.stringify(productosPedido));
    ultimaCompra = JSON.parse(localStorage.getItem("ultimaCompra"));
    productosPedido.length = 0;
    localStorage.setItem("carrito", JSON.stringify(productosPedido));
    localStorage.setItem("datosPedido", JSON.stringify(datosPedido));
    // Re-dirige a pedidoFinalizado.html
    location.href = "pedidoFinalizado.html";
});



// Evento finalizar comprar
// crearNodo("#finalizar-compra").addEventListener("click", () => {
//     localStorage.setItem("ultimaCompra", JSON.stringify(productosPedido));
//     ultimaCompra = JSON.parse(localStorage.getItem("ultimaCompra"));
//     productosPedido.length = 0;
//     localStorage.setItem("carrito", JSON.stringify(productosPedido));


// })

// Evento boton volver a comprar
crearNodo("#boton-volver-comprar").addEventListener("click", () => {
    location.href = "./index.html#catalogo-productos";
});







