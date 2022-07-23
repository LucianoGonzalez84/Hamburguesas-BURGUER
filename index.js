(function () {

    /*
    LISTA DE PRODUCTOS
    */
    const catalogoProductos = [
        {
            id: 1,
            nombre: "Hamburguesa americana simple",
            precioUnitario: 930,
            precioAcumulado: 0,
            tipo: "simple",
            ingredientes:
                "medallón de carne, cebolla, barbacoa, cheddar, panceta, huevo a la plancha",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 2,
            nombre: "Hamburguesa deluxe simple",
            precioUnitario: 920,
            precioAcumulado: 0,
            tipo: "simple",
            ingredientes:
                "medallón de carne, rúcula, tomates hidratados en vino blanco, queso suizo, cebolla morada, salsa alioli",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 3,
            nombre: "Hamburguesa cuatro quesos simple",
            precioUnitario: 900,
            precioAcumulado: 0,
            tipo: "simple",
            ingredientes:
                "medallón de carne, pasta de roquefort, mozzarella, queso tybo, crema de cheddar",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 4,
            nombre: "Hamburguesa mexicana simple",
            precioUnitario: 900,
            precioAcumulado: 0,
            tipo: "simple",
            ingredientes:
                "medallón de carne, cheddar, lechuga, tomate, cebolla, guacamole, salsa dragón",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 5,
            nombre: "Hamburguesa queso azul simple",
            precioUnitario: 900,
            precioAcumulado: 0,
            tipo: "simple",
            ingredientes:
                "medallón de carne, cebolla colorada, hongos rehogados, roquefort, mozzarella",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 6,
            nombre: "Hamburguesa clasica simple",
            precioUnitario: 880,
            precioAcumulado: 0,
            tipo: "simple",
            ingredientes:
                "medallón de carne, lechuga, tomate, queso provolone, tybo, mayonesa, ketchup",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 7,
            nombre: "Hamburguesa de pollo simple",
            precioUnitario: 880,
            precioAcumulado: 0,
            tipo: "simple",
            ingredientes:
                "medallón de pollo, colchón de hojas verdes, tomates , queso suizo, salsa alioli",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 8,
            nombre: "Hamburguesa de cheddar y panceta simple",
            precioUnitario: 880,
            precioAcumulado: 0,
            tipo: "simple",
            ingredientes: "medallón de carne, cheddar, panceta",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 9,
            nombre: "Hamburguesa americana doble",
            precioUnitario: 1120,
            precioAcumulado: 0,
            tipo: "doble",
            ingredientes:
                "doble medallón de carne, cebolla, barbacoa, cheddar, panceta, huevo a la plancha",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 10,
            nombre: "Hamburguesa deluxe doble",
            precioUnitario: 1090,
            precioAcumulado: 0,
            tipo: "doble",
            ingredientes:
                "doble medallón de carne, rúcula, tomates hidratados en vino blanco, queso suizo, cebolla morada, salsa alioli",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 11,
            nombre: "Hamburguesa cuatro quesos doble",
            precioUnitario: 1070,
            precioAcumulado: 0,
            tipo: "doble",
            ingredientes:
                "doble medallón de carne, pasta de roquefort, mozzarella, queso tybo, crema de cheddar.",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 12,
            nombre: "Hamburguesa mexicana doble",
            precioUnitario: 1085,
            precioAcumulado: 0,
            tipo: "doble",
            ingredientes:
                "doble medallón de carne, cheddar, lechuga, tomate, cebolla, guacamole, salsa dragón",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 13,
            nombre: "Hamburguesa queso azul doble",
            precioUnitario: 1075,
            precioAcumulado: 0,
            tipo: "doble",
            ingredientes:
                "doble medallón de carne, cebolla colorada, hongos rehogados, roquefort, mozzarella",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 14,
            nombre: "Hamburguesa clasica doble",
            precioUnitario: 1065,
            precioAcumulado: 0,
            tipo: "doble",
            ingredientes:
                "doble medallón de carne, lechuga, tomate, queso provolone, tybo, mayonesa, ketchup",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 15,
            nombre: "Hamburguesa de pollo doble",
            precioUnitario: 1080,
            precioAcumulado: 0,
            tipo: "doble",
            ingredientes:
                "doble medallón de pollo, colchón de hojas verdes, tomates , queso suizo, salsa alioli",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 16,
            nombre: "Hamburguesa de cheddar y panceta doble",
            precioUnitario: 1085,
            precioAcumulado: 0,
            tipo: "doble",
            ingredientes: "doble medallón de carne, cheddar, panceta",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 17,
            nombre: "Hamburguesa vegetariana simple",
            precioUnitario: 920,
            precioAcumulado: 0,
            tipo: "vegetariana",
            ingredientes:
                "medallón de lentejas, cebolla colorada, rúcula, mozarella, queso provolone, pasta de berenjenas",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 18,
            nombre: "Hamburguesa vegetariana doble",
            precioUnitario: 1050,
            precioAcumulado: 0,
            tipo: "vegetariana",
            ingredientes:
                "doble medallón de lentejas, cebolla colorada, rúcula, mozarella, queso provolone, pasta de berenjenas",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 19,
            nombre: "Hamburguesa simple sin TACC",
            precioUnitario: 1000,
            precioAcumulado: 0,
            tipo: "sin tacc",
            ingredientes: "medallón de carne, cheddar, panceta, pan sin TACC",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
        {
            id: 20,
            nombre: "Hamburguesa doble sin TACC",
            precioUnitario: 1080,
            precioAcumulado: 0,
            tipo: "sin tacc",
            ingredientes:
                "doble medallón de carne, cheddar, panceta, pan sin TACC",
            cantidad: 1,
            img: "./assets/images/hamburguesa.jpg",
            imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
        },
    ]

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
        return document.createElement(elemento)
    }
    //Funcion que agrega los productos seleccionados al carrito
    function agregarAlCarrito(productoId) {
        let DOMhamburguesa = catalogoProductos.find(
            (hamburguesa) => hamburguesa.id === productoId
        );
        if (carritoProductos.includes(DOMhamburguesa)) {
            DOMhamburguesa.cantidad++;
            DOMhamburguesa.precioAcumulado = DOMhamburguesa.precioUnitario * DOMhamburguesa.cantidad;
        } else {
            DOMhamburguesa.precioAcumulado = DOMhamburguesa.precioUnitario * DOMhamburguesa.cantidad;
            carritoProductos.push(DOMhamburguesa);
        }
        
        dibujarCarrito(carritoProductos);
    }
    //Funcion que elimina productos del carrito
    function eliminarProductoCarrito(productoId) {
        let DOMhamburguesa = carritoProductos.find(
            (hamburguesa) => hamburguesa.id === productoId
        );
        let indice = carritoProductos.indexOf(DOMhamburguesa);
        carritoProductos.splice(indice, 1);
        DOMhamburguesa.cantidad = 1;
        localStorage.setItem("carrito", JSON.stringify(carritoProductos));
        dibujarCarrito(carritoProductos);
    }
    //Funcion que renderiza el carrito
    function dibujarCarrito() {
        let DOMcarrito = crearNodo("#carrito");
        DOMcarrito.innerHTML = "";
        carritoProductos.forEach((elemento) => {
            let DOMtemplateProductoCarrito = crearEiqueta("div");
            DOMtemplateProductoCarrito.classList = "producto_agregado";
            DOMtemplateProductoCarrito.innerHTML = `
                                        <p>- ${elemento.nombre}</p>
                                        <p>Precio: $${elemento.precioUnitario}</p>
                                        <p>Cantidad: ${elemento.cantidad}</p>
                                        <button id="eliminar${elemento.id}"><i class="fas fa-trash-alt"></i></button>`
            DOMcarrito.appendChild(DOMtemplateProductoCarrito);
            let DOMboton = crearNodo(`#eliminar${elemento.id}`);
            DOMboton.addEventListener("click", () => {
                eliminarProductoCarrito(elemento.id);
            });
            localStorage.setItem("carrito", JSON.stringify(carritoProductos));
        });
        crearNodo("#precio-total").innerText = carritoProductos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precioAcumulado, 0).toFixed(2);
        crearNodo("#productos-en-carrito").innerText = carritoProductos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.cantidad, 0);
    }


    //Funcion que renderiza ultima compra
    function dibujarCarrito(productos) {
        let DOMcarrito = crearNodo("#carrito");
        DOMcarrito.innerHTML = "";
        productos.forEach((elemento) => {
            let DOMtemplateProductoCarrito = crearEiqueta("div");
            DOMtemplateProductoCarrito.classList = "producto_agregado";
            DOMtemplateProductoCarrito.innerHTML = `
                                        <p>- ${elemento.nombre}</p>
                                        <p>Precio: $${elemento.precioUnitario}</p>
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
        catalogoProductos.forEach(elemento => {
            let DOMtarjeta = crearEiqueta("div");
            let templateProductoHtml = `<div class="tarjeta_producto">
                                    <img src="${elemento.img}">
                                    <div>
                                        <h3>${elemento.nombre}</h3>
                                        <p>${elemento.ingredientes}</p>
                                        <div class="tarjetaAgregarCarrito">
                                            <h4>$ ${elemento.precioUnitario.toFixed(2)}</h4>
                                            <button id="boton${elemento.id}">Agregar<i class="fas fa-cart-plus" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </div>`;
            DOMtarjeta.innerHTML = templateProductoHtml;
            elemento.tipo === "simple" && crearNodo("#lista-hamburguesas-simples").appendChild(DOMtarjeta);
            elemento.tipo === "doble" && crearNodo("#lista-hamburguesas-dobles").appendChild(DOMtarjeta);
            elemento.tipo === "vegetariana" && crearNodo("#lista-hamburguesas-vegetarianas").appendChild(DOMtarjeta);
            elemento.tipo === "sin tacc" && crearNodo("#lista-hamburguesas-sintacc").appendChild(DOMtarjeta);
            //Boton que agrega productos al carrito
            let boton = crearNodo(`#boton${elemento.id}`);
            boton.addEventListener("click", () => {
                agregarAlCarrito(elemento.id)
            })
        });
        //localStorage carrito
        localStorage.getItem("carrito")?null:localStorage.setItem("carrito","[]");
        carritoProductos = JSON.parse(localStorage.getItem("carrito"));
        dibujarCarrito(carritoProductos);  
        //localStorage ultima compra
        localStorage.getItem("ultimaCompra")?null:localStorage.setItem("ultimaCompra","[]");
        ultimaCompra = JSON.parse(localStorage.getItem("ultimaCompra"));
        dibujarCarrito(carritoProductos);  
    });
    //Vacia el carrito por completo
    crearNodo("#vaciar-carrito").addEventListener("click", () => {
        carritoProductos.length = 0;
        localStorage.setItem("carrito", JSON.stringify(carritoProductos));
        dibujarCarrito(carritoProductos);
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
        if (carritoProductos.length===0){
            Swal.fire({
                icon: 'error',
                title: 'No hay productos en el carrito...',
                text: 'imposible procesar tu compra!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        } else {
            localStorage.setItem("ultimaCompra", JSON.stringify(carritoProductos));
            ultimaCompra = JSON.parse(localStorage.getItem("ultimaCompra"));
            carritoProductos.length=0;
            dibujarCarrito(carritoProductos);
            localStorage.setItem("carrito", JSON.stringify(carritoProductos));
        }
    });
    //Repite el ultimo pedido
    crearNodo("#boton-repetir-pedido").addEventListener("click", ()=>{
        carritoProductos = JSON.parse(localStorage.getItem("ultimaCompra"));
        dibujarCarrito(ultimaCompra);
    })
})();

