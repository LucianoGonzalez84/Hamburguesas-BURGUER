/*
LISTA DE PRODUCTOS
*/

const baseDeDatosHamburguesas = [
    {
        id: 1,
        nombre: "Hamburguesa americana simple",
        precio: 930,
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
        precio: 920,
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
        precio: 900,
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
        precio: 900,
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
        precio: 900,
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
        precio: 880,
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
        precio: 880,
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
        precio: 880,
        tipo: "simple",
        ingredientes: "medallón de carne, cheddar, panceta",
        cantidad: 1,
        img: "./assets/images/hamburguesa.jpg",
        imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
    },
    {
        id: 9,
        nombre: "Hamburguesa americana doble",
        precio: 1120,
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
        precio: 1090,
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
        precio: 1070,
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
        precio: 1085,
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
        precio: 1075,
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
        precio: 1065,
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
        precio: 1080,
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
        precio: 1085,
        tipo: "doble",
        ingredientes: "doble medallón de carne, cheddar, panceta",
        cantidad: 1,
        img: "./assets/images/hamburguesa.jpg",
        imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
    },
    {
        id: 17,
        nombre: "Hamburguesa vegetariana simple",
        precio: 920,
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
        precio: 1050,
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
        precio: 1000,
        tipo: "sin tacc",
        ingredientes: "medallón de carne, cheddar, panceta, pan sin TACC",
        cantidad: 1,
        img: "./assets/images/hamburguesa.jpg",
        imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
    },
    {
        id: 20,
        nombre: "Hamburguesa doble sin TACC",
        precio: 1080,
        tipo: "sin tacc",
        ingredientes: "doble medallón de carne, cheddar, panceta, pan sin TACC",
        cantidad: 1,
        img: "./assets/images/hamburguesa.jpg",
        imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg",
    },
];

/*
INICIAMOS VARIABLES
*/

// Header
let DOMnavegador = document.getElementById("navegador");
DOMnavegador.classList="navegador";
let DOMiconoNegro = document.getElementById("icono-negro");
let DOMiconoBlanco = document.getElementById("icono-blanco");
let DOMitemDesplegable = document.getElementById("item-desplegable");
let DOMbotonCarrito = document.getElementById("boton-carrito");
DOMbotonCarrito.style.opacity=0;
let DOMproductosEnCarrito = document.getElementById("productos-en-carrito");
//Main
let carritoProductos = [];
let DOMcarrito = document.getElementById("carrito");
let DOMcontenedorCarrito = document.getElementById("contenedor-carrito");
let DOMbotonCerrarCarrito = document.getElementById("boton-cerrar-carrito");
let DOMmainCarritoActivo=document.getElementById("main-carrito-activo");
let DOMbotonVaciarCarrito = document.getElementById("vaciar-carrito");
let DOMprecioTotal = document.getElementById("precio-total");

/*
INSERTAMOS LOS PRODUCTOS EN INDEX.HTML
*/

baseDeDatosHamburguesas.forEach((elemento) => {
    //Cuerpo de tarjeta
    let cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.className = "tarjeta_producto";
    //Imagen de tarjeta
    let tarjetaImagen = document.createElement("img");
    tarjetaImagen.setAttribute("src", `${elemento.img}`);
    // Info de tarjeta
    let tarjetaInfo = document.createElement("div");
    tarjetaInfo.innerHTML = `<h3>${elemento.nombre}</h3>
                         <p>${elemento.ingredientes}</p>`
    //Precio y boton agregar al carrito
    let agregarCarrito = document.createElement("div");
    agregarCarrito.innerHTML = `<h4>$ ${elemento.precio.toFixed(2)}</h4>
                                <button id="boton${elemento.id}">Agregar<i class="fas fa-cart-plus"></i></button>`;
    agregarCarrito.className = "tarjetaAgregarCarrito"
    //Insertamos
    cuerpoTarjeta.appendChild(tarjetaImagen);
    cuerpoTarjeta.appendChild(tarjetaInfo)
    tarjetaInfo.appendChild(agregarCarrito)
    //Insertamos en html segun tipo de hamburguesa
    if (elemento.tipo === "simple") {
        document.getElementById("lista-hamburguesas-simples").appendChild(cuerpoTarjeta);
    } else if (elemento.tipo === "doble") {
        document.getElementById("lista-hamburguesas-dobles").appendChild(cuerpoTarjeta);
    } else if (elemento.tipo === "vegetariana") {
        document.getElementById("lista-hamburguesas-vegetarianas").appendChild(cuerpoTarjeta);
    } else if (elemento.tipo === "sin tacc") {
        document.getElementById("lista-hamburguesas-sintacc").appendChild(cuerpoTarjeta);
    }
    let boton = document.getElementById(`boton${elemento.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(elemento.id);
    })
});


/*
FUNCIONES
*/

//Funcion que agrega los productos seleccionados al carrito
function agregarAlCarrito(productoId) {
    let hamburguesa = baseDeDatosHamburguesas.find(hamburguesa => hamburguesa.id === productoId);
    carritoProductos.push(hamburguesa);
    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500,
      })
    dibujarCarrito();
}
//Funcion que elimina productos del carrito
function eliminarProductoCarrito(productoId) {
    let hamburguesa = carritoProductos.find(hamburguesa => hamburguesa.id === productoId);
    let indice = carritoProductos.indexOf(hamburguesa);
    carritoProductos.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carritoProductos));
    dibujarCarrito()
}
//Funcion que renderiza el carrito
function dibujarCarrito() {
    DOMcarrito.innerHTML = "";
    carritoProductos.forEach((elemento) => {
        let DOMproductoAgregado = document.createElement("div");
        DOMproductoAgregado.className = "productoAgregado"
        DOMproductoAgregado.innerHTML = `
        <p>- ${elemento.nombre}</p>
        <p>Precio: $${elemento.precio.toFixed(2)}</p>
        <p>Cantidad: ${elemento.cantidad}</p>
        <button id="eliminar${elemento.id}"><i class="fas fa-trash-alt"></i></button>
        `
        DOMcarrito.appendChild(DOMproductoAgregado);
        localStorage.setItem("carrito", JSON.stringify(carritoProductos));
        let DOMboton = document.getElementById(`eliminar${elemento.id}`);
        DOMboton.addEventListener("click", () => {
            eliminarProductoCarrito(elemento.id);
        })
    })
    DOMprecioTotal.innerText = carritoProductos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precio, 0).toFixed(2);
    DOMproductosEnCarrito.innerText = carritoProductos.length;
}


/*
EVENTOS
*/

//LocalStorage
document.addEventListener("DOMContentLoaded",()=>{
    if (localStorage.getItem("carrito")) {
        carritoProductos = JSON.parse(localStorage.getItem("carrito"))
        dibujarCarrito()    
    }
});
//Vacia el carrito por completo
DOMbotonVaciarCarrito.addEventListener("click", () => {
    carritoProductos.length = 0;
    localStorage.setItem("carrito", JSON.stringify(carritoProductos));
    dibujarCarrito()
});
//Abre el carrito
DOMbotonCarrito.addEventListener("click", () => {
    DOMcontenedorCarrito.classList.remove("inactivo");
    DOMcontenedorCarrito.classList.add("contenedor_carrito");
    DOMmainCarritoActivo.classList.remove("inactivo");
    DOMmainCarritoActivo.classList.add("mainSeleccionado");
});
//Cierra el carrito
DOMbotonCerrarCarrito.addEventListener("click", () => {
    DOMcontenedorCarrito.classList.add("inactivo");
    DOMmainCarritoActivo.classList.add("inactivo");
    DOMmainCarritoActivo.classList.remove("mainSeleccionado");
});
//Despliega opcion "nuestras hamburguesas" en el nav
DOMitemDesplegable.addEventListener("click", ()=>{
    let DOMitemDesplegableIcono = document.getElementById("item-desplegable-icono");
    let DOMmenuDesplegado = document.getElementById("menu-desplegado");
    DOMitemDesplegableIcono.classList.toggle("rotacion");
    DOMmenuDesplegado.classList.toggle("alturaAuto");
});
//Cambia estilos del nav al scrollear
window.addEventListener("scroll", ()=>{
    let altura=window.scrollY;
    let DOMalturaAparicionNav = (document.getElementById("limite-scroll").offsetTop);
    if(altura >= DOMalturaAparicionNav){
        DOMnavegador.classList="navegadorScroll";
        DOMiconoBlanco.classList="transparente";
        DOMiconoNegro.classList="icono_negro";
        DOMbotonCarrito.style.opacity=1;
    } else {
        DOMnavegador.classList="navegador";
        DOMiconoBlanco.classList="icono_blanco";
        DOMiconoNegro.classList="transparente";
        DOMbotonCarrito.style.opacity=0;
    }
});
