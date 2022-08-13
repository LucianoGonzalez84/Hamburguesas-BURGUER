// SE INICIAN VARIABLES

const productosPedido = JSON.parse(localStorage.getItem("ultimaCompra"));
const datosPedido = JSON.parse(localStorage.getItem("datosPedido"));

let formaDeEntrega = datosPedido.find(element => {
    if (Object.keys(element) == `forma de entrega`) {
        return (Object.values(element));
    }
});
let calle = datosPedido.find(element => {
    if (Object.keys(element) == `calle`) {
        return (Object.values(element));
    }
});
let entreCalles = datosPedido.find(element => {
    if (Object.keys(element) == `entre calles`) {
        return (Object.values(element));
    }
});
let detalle = datosPedido.find(element => {
    if (Object.keys(element) == `detalle`) {
        return (Object.values(element));
    }
});

let horarioDeEntrega = datosPedido.find(element => {
    if (Object.keys(element) == `horario de entrega`) {
        return (Object.values(element));
    }
});
let formaDePago = datosPedido.find(element => {
    if (Object.keys(element) == `forma de pago`) {
        return (Object.values(element));
    }
});
let montoPago = datosPedido.find(element => {
    if (Object.keys(element) == `monto pago`) {
        return (Object.values(element));
    }
});
let nombre = datosPedido.find(element => {
    if (Object.keys(element) == `nombre`) {
        return (Object.values(element));
    }
});
let telefono = datosPedido.find(element => {
    if (Object.keys(element) == `telefono`) {
        return (Object.values(element));
    }
});
let DOMnombre=crearNodo("#nombre");
DOMnombre.innerText=Object.values(nombre);
let DOMcalle=crearNodo("#calle");
DOMcalle.innerText=Object.values(calle);
let DOMentreCalles=crearNodo("#entre-calles");
DOMentreCalles.innerText=Object.values(entreCalles);
let DOMdetalle=crearNodo("#detalle");
DOMdetalle.innerText=Object.values(detalle);
let DOMhorarioDeEntregaDomicilio=crearNodo("#horario-de-entrega-domicilio");
DOMhorarioDeEntregaDomicilio.innerText=Object.values(horarioDeEntrega);
let DOMhorarioDeEntrega=crearNodo("#horario-de-entrega");
DOMhorarioDeEntrega.innerText=Object.values(horarioDeEntrega);
let DOMtelefono=crearNodo("#telefono");
DOMtelefono.innerText=Object.values(telefono);

const tipoEntrega = ()=>{
    if (Object.values(formaDeEntrega) == "domicilio") {
        crearNodo("#entrega-domicilio").classList.remove("inactivo");
    } else {
        crearNodo("#takeAway").classList.remove("inactivo");
    }
}

tipoEntrega()




// Funcion que crea nodo
function crearNodo(selector) {
    return document.querySelector(selector);
};

// Funcion que crea etiqueta html
function crearEiqueta(elemento) {
    return document.createElement(elemento);
};








console.log();




// const pedidoFinalizado = (productosPedido, datosPedido) => {
//     DOMpedidoFinalizado = crearNodo("#pedido-finalizado")
//     let DOMtemplateEntrega = crearEiqueta("div");
//     DOMtemplateEntrega.innerHTML = `
//     <h5 class="culo">${Object.values(nombre)}, Tu pedido esta siendo procesado!</h5>
//     <h5 class="culo">Podes pasar a buscarlo por nuestro local, a partir de las ${Object.values(horarioDeEntrega)}  Hs (+/- 20 minutos)</h5>`
//     DOMpedidoFinalizado.appendChild(DOMtemplateEntrega);

// }

// pedidoFinalizado()

