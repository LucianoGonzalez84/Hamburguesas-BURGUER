
 /*
INICIAMOS VARIABLES
*/

let productosPedido = JSON.parse(localStorage.getItem("carrito"));

//Funcion que crea nodo
function crearNodo(selector) {
    return document.querySelector(selector);
};
//Funcion que crea etiqueta html
function crearEiqueta(elemento) {
    return document.createElement(elemento);
}

//Funcion que elimina productos del pedido
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
        }; 
    });
};

function agregarProductosPedido(productos) {
    let DOMpedido = crearNodo("#productos");
    DOMpedido.innerHTML="";
    productos.forEach(elemento => {
        let DOMtemplatePedido = crearEiqueta ("div");
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
    let DOMsubtotal = crearNodo("#pedido-subTotal").innerText = productos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0).toFixed(2);
    crearNodo("#pedido-subTotal").innerText = productos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0).toFixed(2);
}

agregarProductosPedido(productosPedido)

function seleccionEntrega() {
    let formaEntrega = crearNodo("#entrega").value;
    if (formaEntrega === "domicilio") {
        crearNodo("#datos-domicilio").classList.remove("inactivo");
        crearNodo("#datos-domicilio").classList.add("datos_domicilio");
    } else if (formaEntrega != "domicilio") {
        crearNodo("#datos-domicilio").classList.remove("datos_domicilio");
        crearNodo("#datos-domicilio").classList.add("inactivo")
    }
};

function seleccionPago() {
    let formaPago = crearNodo("#pago").value;
    if (formaPago === "efectivo") {
        crearNodo("#pago-efectivo").classList.remove("inactivo");
        crearNodo("#pago-efectivo").classList.add("pago_efectivo");
    } else if (formaPago != "domicilio") {
        crearNodo("#pago-efectivo").classList.remove("pago_efectivo");
        crearNodo("#pago-efectivo").classList.add("inactivo");
    }
};





// EVENTOS
//Lanza el loader
setTimeout(function(){ 
    let DOMcontenedorLoader = crearNodo(".contenedor_loader");
    DOMcontenedorLoader.classList.remove("contenedor_loader")
    DOMcontenedorLoader.classList.add("inactivo")
}, 2000);

crearNodo("#boton-volver-comprar").addEventListener("click", ()=>{
    location.href="./index.html#catalogo-productos";
});

crearNodo("#necesito-ayuda").addEventListener("click", ()=>{
    Swal.fire(
        html=`
            <p>Aca va lo de sucucho</p>
        
        `,
        showConfirmButton= true,
    )
});