
 /*
INICIAMOS VARIABLES
*/

let productos = JSON.parse(localStorage.getItem("carrito"));

//Funcion que crea nodo
function crearNodo(selector) {
    return document.querySelector(selector);
};
//Funcion que crea etiqueta html
function crearEiqueta(elemento) {
    return document.createElement(elemento);
}

function agregarProductosPedido(productos) {
    let DOMpedido = crearNodo("#productos");
    DOMpedido.innerHTML="";
    productos.forEach(elemento => {
        let DOMtemplatePedido = crearEiqueta ("div");
        DOMtemplatePedido.innerHTML = ` 
                                <p>${elemento.nombre}</p>
                                <p>Precio: $${elemento.precioUnitario.toFixed(2)}</p>
                                <p>Cantidad: ${elemento.cantidad}</p>`
        DOMpedido.appendChild(DOMtemplatePedido);
        DOMtemplatePedido.classList = "producto";
        DOMpedido.classList = "productos";
    });
    crearNodo("#pedido-subTotal").innerText = productos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0).toFixed(2);
    

    
}

agregarProductosPedido(productos)

function seleccionEntrega() {
    let formaEntrega = crearNodo("#entrega").value;
    
    if (formaEntrega === "take away"){
        alert("sos terrible capo")
    } else if (formaEntrega === "domicilio") {
        alert("fenomenooooooo")
    };
};





