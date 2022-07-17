// LISTA DE HAMBURGUESAS
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






























//Iniciamos variables

let carrito = document.getElementById("carrito");
const carritoProductos = [];

let contenedorCarrito = document.getElementById("contenedor_carrito");
let botoCerrarCarrito = document.getElementById("boton_cerrar_carrito");


let mainCarritoActivo=document.getElementById("mainCarritoActivo");
let botonVaciarCarrito = document.getElementById("vaciar_carrito");





let precioTotal = document.getElementById("precio_total");




// NAVEGADOR
let DOMiconoNegro = document.getElementById("icono-negro");
let DOMiconoBlanco = document.getElementById("icono-blanco");
let DOMbotonCarrito = document.getElementById("boton-carrito");
DOMbotonCarrito.style.opacity=0;
let DOMproductosEnCarrito = document.getElementById("productos-en-carrito");



//Se insertan los productos en index.html
baseDeDatosHamburguesas.forEach((elemento) => {
    //Cuerpo de tarjeta
    let cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.className = "tarjeta";
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
                                <button id="boton${elemento.id}">Agregar<i class="fa-solid fa-cart-arrow-down"></i></button>`;
    agregarCarrito.className = "tarjetaAgregarCarrito"
    //Insertamos
    cuerpoTarjeta.appendChild(tarjetaImagen);
    cuerpoTarjeta.appendChild(tarjetaInfo)
    tarjetaInfo.appendChild(agregarCarrito)
    //Insertamos en html segun tipo de hamburguesa
    if (elemento.tipo === "simple") {
        document.getElementById("listaHamburguesasSimples").appendChild(cuerpoTarjeta);
    } else if (elemento.tipo === "doble") {
        document.getElementById("listaHamburguesasDobles").appendChild(cuerpoTarjeta);
    } else if (elemento.tipo === "vegetariana") {
        document.getElementById("listaHamburguesasVegetarianas").appendChild(cuerpoTarjeta);
    } else if (elemento.tipo === "sin tacc") {
        document.getElementById("listaHamburguesasSinTacc").appendChild(cuerpoTarjeta);
    }
    let boton = document.getElementById(`boton${elemento.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(elemento.id);
    })
});


//FUNCIONES

function agregarAlCarrito(productoId) {
    let hamburguesa = baseDeDatosHamburguesas.find(hamburguesa => hamburguesa.id === productoId);
    carritoProductos.push(hamburguesa);
    dibujarCarrito();
}

function eliminarProductoCarrito(productoId) {
    let hamburguesa = carritoProductos.find(hamburguesa => hamburguesa.id === productoId);
    let indice = carritoProductos.indexOf(hamburguesa);
    carritoProductos.splice(indice, 1);
    dibujarCarrito()
}



function dibujarCarrito() {
    carrito.innerHTML = "";
    carritoProductos.forEach((elemento) => {
        let productoAgregado = document.createElement("div");
        productoAgregado.className = "productoAgregado"
        productoAgregado.innerHTML = `
        <p>- ${elemento.nombre}</p>
        <p>Precio: $${elemento.precio.toFixed(2)}</p>
        <p>Cantidad: ${elemento.cantidad}</p>
        <button id="eliminar${elemento.id}"><i class="fa-solid fa-trash-can"></i></button>
        `
        carrito.appendChild(productoAgregado);
        let boton = document.getElementById(`eliminar${elemento.id}`);
        boton.addEventListener("click", () => {
            eliminarProductoCarrito(elemento.id);
        })
    })
    precioTotal.innerText = carritoProductos.reduce((acumulador, hamburguesa) => acumulador + hamburguesa.precio, 0).toFixed(2);
    DOMproductosEnCarrito.innerText = carritoProductos.length;
}


//EVENTOS
botonVaciarCarrito.addEventListener("click", () => {
    carritoProductos.length = 0;
    dibujarCarrito()
})

botoCerrarCarrito.addEventListener("click", () => {
    contenedorCarrito.classList.add("inactivo");
    mainCarritoActivo.classList.add("inactivo");
    mainCarritoActivo.classList.remove("mainSeleccionado");
});
DOMbotonCarrito.addEventListener("click", () => {
    contenedorCarrito.classList.remove("inactivo");
    contenedorCarrito.classList.add("contenedor_carrito");
    mainCarritoActivo.classList.remove("inactivo");
    mainCarritoActivo.classList.add("mainSeleccionado");
    
})


let DOMnavegador = document.getElementById("navegador");
DOMnavegador.classList="navegador";



window.addEventListener("scroll", ()=>{
    let altura=window.scrollY;
    let DOMalturaAparicionNav = (document.getElementById("main").offsetTop);
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
    
})

