(function () {
    /*
    SE INICIAN VARIABLES
    */

    let carritoProductos = [];
    let ultimaCompra = [];

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
    };

    // Funcion que inserta los productos en index.html
    const insertarProductos = async () => {
        try {
            const baseDeDatos = await fetch(`./dates/productos.json`);
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
                crearNodo(`#boton${producto.id}`).addEventListener("click", () => {
                    agregarAlCarrito(producto.id);
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Funcion que agrega los productos seleccionados al carrito
    const agregarAlCarrito = async (productoId) => {
        try {
            const baseDeDatos = await fetch(`./dates/productos.json`);
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
                          <h3>Se agregó <span>${DOMhamburguesa.nombre}</span> al carrito</h3>
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

    // Funcion que elimina productos del carrito
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
                              <h3>Se eliminó <span>${DOMhamburguesa.nombre}</span></h3>
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

    // Funcion que renderiza el modal carrito
    function dibujarCarrito(productos) {
        if (productos.length === 0) {
            crearNodo("#carrito").innerHTML = "";
            let DOMcarritoVacio = crearEiqueta("div");
            DOMcarritoVacio.innerHTML = `
                                    <h5>El carrito se encuentra vacio <i class="far fa-frown"></i></h5>`
            crearNodo("#carrito").appendChild(DOMcarritoVacio);
            crearNodo("#subTotal").innerText = (0).toFixed(2);
            crearNodo("#productos-en-carrito-desplegable").innerText = 0;
            crearNodo("#productos-en-carrito").innerText = 0;
        } else {
            crearNodo("#carrito").innerHTML = "";
            productos.forEach((elemento) => {
                let DOMtemplateProductoCarrito = crearEiqueta("div");
                DOMtemplateProductoCarrito.classList = "producto_agregado";
                DOMtemplateProductoCarrito.innerHTML = `
                                        <p>${elemento.nombre}</p>
                                        <p>Precio: $${elemento.precioUnitario.toFixed(2)}</p>
                                        <p>Cantidad: ${elemento.cantidad}</p>
                                        <button id="eliminar${elemento.id}"><i class="fas fa-trash"></i></button>`
                crearNodo("#carrito").appendChild(DOMtemplateProductoCarrito);
                crearNodo(`#eliminar${elemento.id}`).addEventListener("click", () => {
                    eliminarProductoCarrito(elemento.id);
                });
                localStorage.setItem("carrito", JSON.stringify(productos));
            });
            crearNodo("#subTotal").innerText = productos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0).toFixed(2);
            crearNodo("#productos-en-carrito-desplegable").innerText = productos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.cantidad, 0);
            crearNodo("#productos-en-carrito").innerText = productos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.cantidad, 0);
        }
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
        //localStorage datos del pedido
        localStorage.getItem("datosPedido") ? null : localStorage.setItem("datosPedido", "[]");
        //Icono carrito oculto
        crearNodo("#boton-carrito").style.opacity = 0;
        crearNodo("#boton-carrito-desplegable").style.opacity = 0;
    });

    // Lanza el loader
    setTimeout(function () {
        let DOMcontenedorLoader = crearNodo(".contenedor_loader");
        DOMcontenedorLoader.classList.remove("contenedor_loader")
        DOMcontenedorLoader.classList.add("inactivo")
    }, 2000);

    // Vacia el carrito por completo
    crearNodo("#vaciar-carrito").addEventListener("click", () => {
        if (carritoProductos.length === 0) {
            Swal.fire({
                html: `
                <div class="sweetAlert">
                    <i class="fas fa-exclamation-circle"></i>
                    <h3>No hay productos en el carrito!</h3>
                </div>
                `,
                showConfirmButton: true,
                confirmButtonText: `Volver a comprar`,
                buttonsStyling: false,
                customClass: { confirmButton: `volver_a_comprar` },
            });
        } else {
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
                    carritoProductos.forEach(elemento => {
                        elemento.cantidad = 1
                    });
                    carritoProductos.length = 0;
                    localStorage.setItem("carrito", JSON.stringify(carritoProductos));
                    dibujarCarrito(carritoProductos);
                };
            });
        };
    });

    // Abre el carrito
    crearNodo("#boton-carrito").addEventListener("click", () => {
        crearNodo("#modal-carrito").classList.remove("inactivo");
        crearNodo("#modal-carrito").classList.add("contenedor_carrito");
        crearNodo("#carrito-seleccionado").classList.remove("inactivo");
        crearNodo("#carrito-seleccionado").classList.add("carrito_seleccionado");
    });

    //Abre el carrito en movil
    crearNodo("#boton-carrito-desplegable").addEventListener("click", () => {
        crearNodo("#modal-carrito").classList.remove("inactivo");
        crearNodo("#modal-carrito").classList.add("contenedor_carrito");
        crearNodo("#carrito-seleccionado").classList.remove("inactivo");
        crearNodo("#carrito-seleccionado").classList.add("carrito_seleccionado");
    });

    // Cierra el carrito
    crearNodo("#boton-cerrar-carrito").addEventListener("click", () => {
        crearNodo("#modal-carrito").classList.remove("contenedor_carrito");
        crearNodo("#modal-carrito").classList.add("inactivo");
        crearNodo("#carrito-seleccionado").classList.remove("carrito_seleccionado");
        crearNodo("#carrito-seleccionado").classList.add("inactivo");
    });

    // Cambia estilos al scrollear
    window.addEventListener("scroll", () => {
        if (window.scrollY >= crearNodo("#limite-scroll").offsetTop) {
            crearNodo("#navegador").classList = "navegadorScroll";
            crearNodo("#navegador-desplegable").classList = "navegadorScroll_desplegable";
            crearNodo("#icono-blanco").classList = "transparente";
            crearNodo("#icono-blanco-desplegable").classList = "transparente";
            crearNodo("#icono-negro").classList = "icono_negro";
            crearNodo("#icono-negro-desplegable").classList = "icono_negro_desplegable";
            crearNodo("#menu-desplegable-arriba").style.background = "black";
            crearNodo("#menu-desplegable-medio").style.background = "black";
            crearNodo("#menu-desplegable-abajo").style.background = "black";
            crearNodo("#boton-carrito").style.opacity = 1;
            crearNodo("#boton-carrito-desplegable").style.opacity = 1;
        } else {
            crearNodo("#navegador").classList = "navegador";
            crearNodo("#navegador-desplegable").classList = "navegador_desplegable";
            crearNodo("#icono-blanco").classList = "icono_blanco";
            crearNodo("#icono-blanco-desplegable").classList = "icono_blanco_desplegable";
            crearNodo("#icono-negro").classList = "transparente";
            crearNodo("#icono-negro-desplegable").classList = "transparente";
            crearNodo("#menu-desplegable-arriba").style.background = "white";
            crearNodo("#menu-desplegable-medio").style.background = "white";
            crearNodo("#menu-desplegable-abajo").style.background = "white";
            crearNodo("#boton-carrito").style.opacity = 0;
            crearNodo("#boton-carrito-desplegable").style.opacity = 0;
            crearNodo("#modal-carrito").classList.remove("contenedor_carrito");
            crearNodo("#modal-carrito").classList.add("inactivo");
            crearNodo("#carrito-seleccionado").classList.remove("carrito_seleccionado");
            crearNodo("#carrito-seleccionado").classList.add("inactivo");
        };
    });

    // Se procesa el pedido
    crearNodo("#procesar-compra").addEventListener("click", () => {
        if (carritoProductos.length === 0) {
            Swal.fire({
                html: `
                <div class="sweetAlert">
                    <i class="fas fa-exclamation-circle"></i>
                    <h3>No hay productos en el carrito<br><b>imposible procesar tu compra!</b></h3>
                    <h3>Volviendo a la tienda <span id="conteo" class="conteo">3</span> ...</h3>
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
                crearNodo("#modal-carrito").classList.remove("contenedor_carrito");
                crearNodo("#modal-carrito").classList.add("inactivo");
                crearNodo("#carrito-seleccionado").classList.remove("carrito_seleccionado");
                crearNodo("#carrito-seleccionado").classList.add("inactivo");
                location.href = "index.html#catalogo-productos";
            }, 4000);
        } else {
            location.href = "../pages/pedido.html";
        };
    });

    // Repite el ultimo pedido
    crearNodo("#boton-repetir-pedido").addEventListener("click", () => {
        carritoProductos = JSON.parse(localStorage.getItem("ultimaCompra"));
        dibujarCarrito(ultimaCompra);
    });

    // Despliega opciones de menu en nav
    let opcion = "abierto";
    function despliegaMenu() {
        if (opcion == "abierto") {
            crearNodo("#menu-desplegable").classList.remove("inactivo");
            crearNodo("#menu-desplegable").classList.add("menu_desplegable");
            opcion = "cerrado";
        } else {
            crearNodo("#menu-desplegable").classList.remove("menu_desplegable");
            crearNodo("#menu-desplegable").classList.add("inactivo");
            opcion = "cerrado";
            opcion = "abierto";
        };
    };
    crearNodo("#check").addEventListener("click", () => {
        despliegaMenu()
    })
})();



