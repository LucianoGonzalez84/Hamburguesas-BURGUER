// SE INICIAN VARIABLES

const productosPedido = JSON.parse(localStorage.getItem("ultimaCompra"));
const datosPedido = JSON.parse(localStorage.getItem("datosPedido"));



// Funcion que crea nodo
function crearNodo(selector) {
    return document.querySelector(selector);
};

// Funcion que crea etiqueta html
function crearEiqueta(elemento) {
    return document.createElement(elemento);
};






let DOMnombre = datosPedido.find(element => {
    if (Object.keys(element) == `nombre`) {
        return (Object.values(element));
    }
});
let DOMhorario = datosPedido.find(element => {
    if (Object.keys(element) == `horario de entrega`) {
        return (Object.values(element));
    }
});

console.log(DOMnombre);
console.log(DOMhorario);




const pedidoFinalizado = (productosPedido,datosPedido) => {
    DOMpedidoFinalizado = crearNodo("#pedido-finalizado")
    let DOMtemplateEntrega = crearEiqueta("div");
    DOMtemplateEntrega.innerHTML = `
    <h5 class="culo">${Object.values(DOMnombre)}, Tu pedido esta siendo procesado!</h5>
    <h5 class="culo">Podes pasar a buscarlo por nuestro local, a partir de las ${Object.values(DOMhorario)}  Hs (+/- 20 minutos)</h5>`
    DOMpedidoFinalizado.appendChild(DOMtemplateEntrega);

}

pedidoFinalizado()

