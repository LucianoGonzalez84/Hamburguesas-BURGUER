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
botoCerrarCarrito.addEventListener("click", () => {
    contenedorCarrito.classList.add("inactivo");
    mainCarritoActivo.classList.add("inactivo");
    mainCarritoActivo.classList.remove("mainSeleccionado");
});

let mainCarritoActivo=document.getElementById("mainCarritoActivo");
let botonVaciarCarrito = document.getElementById("vaciar_carrito");
let botonCarrito = document.getElementById("boton_carrito");
botonCarrito.addEventListener("click", () => {
    contenedorCarrito.classList.remove("inactivo");
    contenedorCarrito.classList.add("contenedor_carrito");
    mainCarritoActivo.classList.remove("inactivo");
    mainCarritoActivo.classList.add("mainSeleccionado");
    
})
let productosEnCarrito = document.getElementById("productos_en_carrito");


let cantidadProductos = document.getElementById("cantidad_productos");


let precioTotal = document.getElementById("precio_total");


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

botonVaciarCarrito.addEventListener("click", () => {
    carritoProductos.length = 0;
    dibujarCarrito()
})

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
    productosEnCarrito.innerText = carritoProductos.length;
}








// //BUSCADOR HAMBURGUESAS
// let buscador = document.getElementById("buscador");
// buscador.className = "estiloBuscador";

// let productos = document.getElementById("productos");
// productos.classList.add("inactivo")

// function armaLista(arreglo, productos) {
//     let indice = 1;
//     arreglo.forEach(elemento => {
//         let producto = document.createElement("li");
//         producto.setAttribute("id", `hamburguesa${indice}`);
//         producto.className = "hamburguesa";
//         let productoImagen = document.createElement("div");
//         productoImagen.className = "hamburguesaImagen";
//         productoImagen.innerHTML = `<img src="${elemento.imgMiniatura}" alt="hamburguesa miniatura">`;
//         let productoInfo = document.createElement("div");
//         productoInfo.className = "hamburguesaInfo";
//         productoInfo.innerHTML = `<p>${elemento.nombre}</p>
//                                   <p>Precio: $${elemento.precio.toFixed(2)}</p>`
//         producto.append(productoImagen, productoInfo);
//         productos.append(producto);
//         indice = indice + 1;
//     });
// }

// function buscaEnLista(buscador, productos) {
//     buscador.addEventListener("keyup", e => {
//         document.querySelectorAll(".hamburguesa").forEach(hamburguesa => {
//             if (e.target.value != "") {
//                 productos.classList.remove("inactivo")
//                 if (hamburguesa.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
//                     hamburguesa.classList.remove("inactivo");
//                 } else {
//                     hamburguesa.classList.add("inactivo");

//                 }
//             } else {
//                 productos.classList.add("inactivo");
//             }
//         })
//     })
// }

// armaLista(baseDeDatosHamburguesas, productos);

// buscaEnLista(buscador, productos)

// // MENU HAMBURGUESAS
// function elegirHamburguesa(arreglo, lista) {
//     for (const producto of arreglo) {
//         let card = document.createElement("div");
//         card.className = "card";
//         card.id = `card${producto.id}`;
//         let cardActiva = document.createElement("div");
//         let cardActivaImagen = document.createElement("div");
//         let cardActivaInfo = document.createElement("div");
//         cardActivaImagen.innerHTML = `<img src=${producto.img} alt="hamburguesa"></img>`
//         cardActivaInfo.innerHTML = `<h3>${producto.nombre}</h3>
//                                  <p>${producto.ingredientes}</p>
//                                  <h4>$ ${producto.precio.toFixed(2)}</h4>`
//         cardActiva.append(cardActivaImagen, cardActivaInfo);
//         cardActiva.className = "cardActiva";
//         cardActiva.id = `cardActiva${producto.id}`;
//         card.append(cardActiva);
//         let cardInactiva = document.createElement("div");
//         let cardInactivaBoton = document.createElement("button");
//         cardInactivaBoton.innerText = "Agregar al carrito";
//         cardInactivaBoton.id = `boton${producto.id}`
//         cardInactiva.append(cardInactivaBoton);
//         cardInactiva.className = "inactivo";
//         cardInactiva.id = `cardInactiva${producto.id}`;
//         card.append(cardInactiva)
//         lista.append(card);
//         //Evento pasar con mouse
//         card.addEventListener("mouseenter", () => {
//             cardInactiva.classList.add("cardInactiva");
//             cardInactiva.classList.remove("inactivo")
//         });
//         card.addEventListener("mouseleave", () => {
//             cardInactiva.classList.remove("cardInactiva");
//             cardInactiva.classList.add("inactivo");
//         })

//     }
// }








let navegador = document.getElementById("navegacion");
navegador.classList="navegador";

let iconoNegro = document.getElementById("icono_negro");
let iconoBlanco = document.getElementById("icono_blanco");
window.addEventListener("scroll", ()=>{
    let altura=window.scrollY;
    
    let alturaAparicionNav = (document.getElementById("main").offsetTop) 
    if(altura >= alturaAparicionNav){
        document.getElementById("navegacion").className="navegadorScroll";
        botonCarrito.style.opacity=1;
        iconoNegro.style.opacity=1;
        iconoBlanco.style.opacity=0;
    } else {
        document.getElementById("navegacion").className="navegador"
        botonCarrito.style.opacity=0;
        iconoNegro.style.opacity=0;
        iconoBlanco.style.opacity=1;
    }
    
})

