(function () {
    /*
    INICIAMOS VARIABLES
    */

    // Header
    let DOMbotonCarrito = crearNodo("#boton-carrito");
    DOMbotonCarrito.style.opacity = 0;
    //Main
    let carritoProductos = [];
    let ultimaCompra = [];
    let DOMmodalCarrito = crearNodo("#modal-carrito");
    let DOMcarritoActivo = crearNodo("#carrito-seleccionado");

    /*
    FUNCIONES
    */

    //Funcion que crea nodo
    function crearNodo(selector) {
        return document.querySelector(selector);
    };
    //Funcion que crea etiqueta html
    function crearEiqueta(elemento) {
        return document.createElement(elemento);
    }
    //Funcion que inserta los productos en index.html
    const insertarProductos = async () => {
        try {
            const baseDeDatos = await fetch(`./productos.json`);
            const productos = await baseDeDatos.json();
            productos.forEach(producto => {
                let DOMtarjeta = crearEiqueta("div");
                let templateProductoHtml = `<div class="tarjeta_producto">
                                        <img src="${producto.img}">
                                        <div>
                                            <h3>${producto.nombre}</h3>
                                            <p>${producto.ingredientes}</p>
                                            <div class="tarjetaAgregarCarrito">
                                                <h4>$ ${producto.precioUnitario.toFixed(2)}</h4>
                                                <button id="boton${producto.id}">Agregar<i class="fas fa-cart-plus" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </div>`;
                DOMtarjeta.innerHTML = templateProductoHtml;
                producto.tipo === "simple" && crearNodo("#lista-hamburguesas-simples").appendChild(DOMtarjeta);
                producto.tipo === "doble" && crearNodo("#lista-hamburguesas-dobles").appendChild(DOMtarjeta);
                producto.tipo === "vegetariana" && crearNodo("#lista-hamburguesas-vegetarianas").appendChild(DOMtarjeta);
                producto.tipo === "sin tacc" && crearNodo("#lista-hamburguesas-sintacc").appendChild(DOMtarjeta);
                //Boton que agrega productos al carrito
                let boton = crearNodo(`#boton${producto.id}`);
                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto.id);
                });
            });
        } catch (error) {
            console.log(error);
        }
    }
    //Funcion que agrega los productos seleccionados al carrito
    const agregarAlCarrito = async (productoId) =>{
        try {
            const baseDeDatos = await fetch(`./productos.json`);
            const productos = await baseDeDatos.json();
            let DOMhamburguesa = productos.find(
                (hamburguesa) => hamburguesa.id === productoId
            );
            if (carritoProductos.includes(DOMhamburguesa)) {
                DOMhamburguesa.cantidad++;
                DOMhamburguesa.precioAcumulado = DOMhamburguesa.precioUnitario * DOMhamburguesa.cantidad;
            } else {
                DOMhamburguesa.precioAcumulado = DOMhamburguesa.precioUnitario * DOMhamburguesa.cantidad;
                carritoProductos.push(DOMhamburguesa);
            };
            Swal.fire({
                position: 'center',
                html: `
                      <div class="sweetAlert">
                      <i class="fas fa-check-circle"></i>
                          <h3>Se agrego <span>${DOMhamburguesa.nombre}</span> al carrito</h3>
                      </div>
                      `,
                showConfirmButton: false,
                timer: 1500
            });
            dibujarCarrito(carritoProductos);
        } catch (error) {
            console.log(error);
        };
    };
    //Funcion que elimina productos del carrito
    const eliminarProductoCarrito = (productoId) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'boton_no_eliminar',
                cancelButton: 'boton_eliminar'
            },
            buttonsStyling: false
        })
        let DOMhamburguesa = carritoProductos.find(
            (hamburguesa) => hamburguesa.id === productoId
        );
        swalWithBootstrapButtons.fire({
            html: `
                 <div class="sweetAlert">
                     <i class="fas fa-exclamation-circle"></i>
                     <h3>Queres eliminar <span>${DOMhamburguesa.nombre}</span> del carrito</h3>
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
                let indice = carritoProductos.indexOf(DOMhamburguesa);
                carritoProductos.splice(indice, 1);
                DOMhamburguesa.cantidad = 1;
                localStorage.setItem("carrito", JSON.stringify(carritoProductos));
                dibujarCarrito(carritoProductos);
            }; 
        });
    };
    //Funcion que renderiza el modal carrito
    function dibujarCarrito(productos) {
        let DOMcarrito = crearNodo("#carrito");
        DOMcarrito.innerHTML = "";
        productos.forEach((elemento) => {
            let DOMtemplateProductoCarrito = crearEiqueta("div");
            DOMtemplateProductoCarrito.classList = "producto_agregado";
            DOMtemplateProductoCarrito.innerHTML = `
                                        <p>- ${elemento.nombre}</p>
                                        <p>Precio: $${elemento.precioUnitario.toFixed(2)}</p>
                                        <p>Cantidad: ${elemento.cantidad}</p>
                                        <button id="eliminar${elemento.id}"><i class="fas fa-trash-alt"></i></button>`
            DOMcarrito.appendChild(DOMtemplateProductoCarrito);
            let DOMboton = crearNodo(`#eliminar${elemento.id}`);
            DOMboton.addEventListener("click", () => {
                eliminarProductoCarrito(elemento.id);
            });
            localStorage.setItem("carrito", JSON.stringify(productos));
        });
        crearNodo("#precio-total").innerText = productos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0).toFixed(2);
        crearNodo("#productos-en-carrito").innerText = productos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.cantidad, 0);
    }

    /*
      EVENTOS
    */

    document.addEventListener("DOMContentLoaded", () => {
        //Se insertan los productos en index.html
        insertarProductos();
        //localStorage carrito
        localStorage.getItem("carrito") ? null : localStorage.setItem("carrito", "[]");
        carritoProductos = JSON.parse(localStorage.getItem("carrito"));
        dibujarCarrito(carritoProductos);
        //localStorage ultima compra
        localStorage.getItem("ultimaCompra") ? null : localStorage.setItem("ultimaCompra", "[]");
        ultimaCompra = JSON.parse(localStorage.getItem("ultimaCompra"));
        dibujarCarrito(carritoProductos);
    });
    //Vacia el carrito por completo
    crearNodo("#vaciar-carrito").addEventListener("click", () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'boton_no_eliminar',
                cancelButton: 'boton_eliminar'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            html: `
                 <div class="sweetAlert">
                     <i class="fas fa-exclamation-circle"></i>
                     <h3>Estas seguro de vaciar el carrito?</h3>
                 </div>    
                 `,
            showCancelButton: true,
            confirmButtonText: 'Si, vaciar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    html: `
                          <div class="sweetAlert">
                          <i class="check fas fa-check-circle"></i>
                              <h3>El carrito esta vacio</h3>
                          </div>
                          `,
                    showConfirmButton: false,
                    timer: 1500
                });
                carritoProductos.forEach(elemento => {
                    elemento.cantidad = 1
                });
                carritoProductos.length = 0;
                localStorage.setItem("carrito", JSON.stringify(carritoProductos));
                dibujarCarrito(carritoProductos);
            }; 
        });
    });
    //Abre el carrito
    DOMbotonCarrito.addEventListener("click", () => {
        DOMmodalCarrito.classList.remove("inactivo");
        DOMmodalCarrito.classList.add("contenedor_carrito");
        DOMcarritoActivo.classList.remove("inactivo");
        DOMcarritoActivo.classList.add("carrito_seleccionado");
    });
    //Cierra el carrito
    crearNodo("#boton-cerrar-carrito").addEventListener("click", () => {
        DOMmodalCarrito.classList.remove("contenedor_carrito");
        DOMmodalCarrito.classList.add("inactivo");
        DOMcarritoActivo.classList.remove("carrito_seleccionado");
        DOMcarritoActivo.classList.add("inactivo");
    });
    //Despliega opcion "nuestras hamburguesas" en el nav
    crearNodo("#item-desplegable").addEventListener("click", () => {
        crearNodo("#item-desplegable-icono").classList.toggle("rotacion");
        crearNodo("#menu-desplegado").classList.toggle("alturaAuto");
    });
    //Cambia estilos del nav al scrollear
    let DOMnavegador = crearNodo("#navegador");
    let DOMiconoNegro = crearNodo("#icono-negro");
    let DOMiconoBlanco = crearNodo("#icono-blanco");
    window.addEventListener("scroll", () => {
        let DOMaltura = window.scrollY;
        let DOMalturaAparicionNav = crearNodo("#limite-scroll").offsetTop;
        if (DOMaltura >= DOMalturaAparicionNav) {
            DOMnavegador.classList = "navegadorScroll";
            DOMiconoBlanco.classList = "transparente";
            DOMiconoNegro.classList = "icono_negro";
            DOMbotonCarrito.style.opacity = 1;
        } else {
            DOMnavegador.classList = "navegador";
            DOMiconoBlanco.classList = "icono_blanco";
            DOMiconoNegro.classList = "transparente";
            DOMbotonCarrito.style.opacity = 0;
        }
    });
    //Se procesa el pedido
    crearNodo("#procesar-compra").addEventListener("click", () => {
        if (carritoProductos.length === 0) {
            Swal.fire({
                html: `
                <div class="sweetAlert">
                    <i class="fas fa-exclamation-circle"></i>
                    <h3>No hay productos en el carrito<br><b>imposible procesar tu compra!</b></h3>
                </div>
                `,
                showConfirmButton: true,
                confirmButtonText: `Volver a comprar`,
                buttonsStyling: false,
                customClass: { confirmButton: `volver_a_comprar` },
            });
        } else {
            localStorage.setItem("ultimaCompra", JSON.stringify(carritoProductos));
            ultimaCompra = JSON.parse(localStorage.getItem("ultimaCompra"));
            carritoProductos.length = 0;
            dibujarCarrito(carritoProductos);
            localStorage.setItem("carrito", JSON.stringify(carritoProductos));
        };
    });
    //Repite el ultimo pedido
    crearNodo("#boton-repetir-pedido").addEventListener("click", () => {
        carritoProductos = JSON.parse(localStorage.getItem("ultimaCompra"));
        dibujarCarrito(ultimaCompra);
    });
})();


