// LISTA DE HAMBURGUESAS
const hamburguesasSimples = [
    { id: 1, nombre: "Hamburguesa americana simple", precio: 930, tipo: "simple", ingredientes: "medallón de carne, cebolla, barbacoa, cheddar, panceta, huevo a la plancha", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 2, nombre: "Hamburguesa deluxe simple", precio: 920, tipo: "simple", ingredientes: "medallón de carne, rúcula, tomates hidratados en vino blanco, queso suizo, cebolla morada, salsa alioli", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 3, nombre: "Hamburguesa cuatro quesos simple", precio: 900, tipo: "simple", ingredientes: "medallón de carne, pasta de roquefort, mozzarella, queso tybo, crema de cheddar.", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 4, nombre: "Hamburguesa mexicana simple", precio: 900, tipo: "simple", ingredientes: "medallón de carne, cheddar, lechuga, tomate, cebolla, guacamole, salsa dragón", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 5, nombre: "Hamburguesa queso azul simple", precio: 900, tipo: "simple", ingredientes: "medallón de carne, cebolla colorada, hongos rehogados, roquefort, mozzarella", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 6, nombre: "Hamburguesa clasica simple", precio: 880, tipo: "simple", ingredientes: "medallón de carne, lechuga, tomate, queso provolone, tybo, mayonesa, ketchup", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 7, nombre: "Hamburguesa de pollo simple", precio: 880, tipo: "simple", ingredientes: "medallón de pollo, colchón de hojas verdes, tomates , queso suizo, salsa alioli", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 8, nombre: "Hamburguesa de cheddar y panceta simple", precio: 880, tipo: "simple", ingredientes: "medallón de carne, cheddar, panceta", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
]
const hamburguesasDobles = [
    { id: 9, nombre: "Hamburguesa americana doble", precio: 1120, tipo: "doble", ingredientes: "doble medallón de carne, cebolla, barbacoa, cheddar, panceta, huevo a la plancha", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 10, nombre: "Hamburguesa deluxe doble", precio: 1090, tipo: "doble", ingredientes: "doble medallón de carne, rúcula, tomates hidratados en vino blanco, queso suizo, cebolla morada, salsa alioli", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 11, nombre: "Hamburguesa cuatro quesos doble", precio: 1070, tipo: "doble", ingredientes: "doble medallón de carne, pasta de roquefort, mozzarella, queso tybo, crema de cheddar.", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 12, nombre: "Hamburguesa mexicana doble", precio: 1085, tipo: "doble", ingredientes: "doble medallón de carne, cheddar, lechuga, tomate, cebolla, guacamole, salsa dragón", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 13, nombre: "Hamburguesa queso azul doble", precio: 1075, tipo: "doble", ingredientes: "doble medallón de carne, cebolla colorada, hongos rehogados, roquefort, mozzarella", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 14, nombre: "Hamburguesa clasica doble", precio: 1065, tipo: "doble", ingredientes: "doble medallón de carne, lechuga, tomate, queso provolone, tybo, mayonesa, ketchup", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 15, nombre: "Hamburguesa de pollo doble", precio: 1080, tipo: "doble", ingredientes: "doble medallón de pollo, colchón de hojas verdes, tomates , queso suizo, salsa alioli", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 16, nombre: "Hamburguesa de cheddar y panceta doble", precio: 1085, tipo: "doble", ingredientes: "doble medallón de carne, cheddar, panceta", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
]
const hamburguesasVegetarianas = [
    { id: 17, nombre: "Hamburguesa vegetariana simple", precio: 920, tipo: "vegetariana", ingredientes: "medallón de lentejas, cebolla colorada, rúcula, mozarella, queso provolone, pasta de berenjenas", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 18, nombre: "Hamburguesa vegetariana doble", precio: 1050, tipo: "vegetariana", ingredientes: "doble medallón de lentejas, cebolla colorada, rúcula, mozarella, queso provolone, pasta de berenjenas", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
]
const hamburguesasSinTacc = [
    { id: 19, nombre: "Hamburguesa simple sin TACC", precio: 1000, tipo: "sin tacc", ingredientes: "medallón de carne, cheddar, panceta, pan sin TACC", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
    { id: 20, nombre: "Hamburguesa doble sin TACC", precio: 1080, tipo: "sin tacc", ingredientes: "doble medallón de carne, cheddar, panceta, pan sin TACC", img: "./assets/images/hamburguesa.jpg", imgMiniatura: "./assets/images/hamburguesaMiniatura.jpg" },
]

//BUSCADOR HAMBURGUESAS
let buscador = document.getElementById("buscador");
buscador.className = "estiloBuscador";

let productos = document.getElementById("productos");
productos.classList.add("inactivo")

function armaLista(arreglo, productos) {
    let indice = 1;
    arreglo.forEach(elemento => {
        let producto = document.createElement("li");
        producto.setAttribute("id", `hamburguesa${indice}`);
        producto.className = "hamburguesa";
        let productoImagen = document.createElement("div");
        productoImagen.className = "hamburguesaImagen";
        productoImagen.innerHTML = `<img src="${elemento.imgMiniatura}" alt="hamburguesa miniatura">`;
        let productoInfo = document.createElement("div");
        productoInfo.className = "hamburguesaInfo";
        productoInfo.innerHTML = `<p>${elemento.nombre}</p>
                                  <p>Precio: $${elemento.precio.toFixed(2)}</p>`
        producto.append(productoImagen, productoInfo);
        productos.append(producto);
        indice = indice + 1;
    });
}

function buscaEnLista(buscador, productos) {
    buscador.addEventListener("keyup", e => {
        document.querySelectorAll(".hamburguesa").forEach(hamburguesa => {
            if (e.target.value != "") {
                productos.classList.remove("inactivo")
                if (hamburguesa.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
                    hamburguesa.classList.remove("inactivo");
                } else {
                    hamburguesa.classList.add("inactivo");

                }
            } else {
                productos.classList.add("inactivo");
            }
        })
    })
}

armaLista(hamburguesasSimples, productos);
armaLista(hamburguesasDobles, productos);
armaLista(hamburguesasVegetarianas, productos);
armaLista(hamburguesasSinTacc, productos);
buscaEnLista(buscador, productos)

// MENU HAMBURGUESAS
function elegirHamburguesa(arreglo, lista) {
    for (const producto of arreglo) {
        let card = document.createElement("div");
        card.className = "card";
        card.id = `card${producto.id}`;
        let cardActiva = document.createElement("div");
        let cardActivaImagen = document.createElement("div");
        let cardActivaInfo = document.createElement("div");
        cardActivaImagen.innerHTML = `<img src=${producto.img} alt="hamburguesa"></img>`
        cardActivaInfo.innerHTML = `<h3>${producto.nombre}</h3>                         
                                 <p>${producto.ingredientes}</p>                         
                                 <h4>$ ${producto.precio.toFixed(2)}</h4>`
        cardActiva.append(cardActivaImagen, cardActivaInfo);
        cardActiva.className = "cardActiva";
        cardActiva.id = `cardActiva${producto.id}`;
        card.append(cardActiva);
        let cardInactiva = document.createElement("div");
        let cardInactivaBoton = document.createElement("button");
        cardInactivaBoton.innerText = "Agregar al carrito";
        cardInactivaBoton.id = `boton${producto.id}`
        cardInactiva.append(cardInactivaBoton);
        cardInactiva.className = "inactivo";
        cardInactiva.id = `cardInactiva${producto.id}`;
        card.append(cardInactiva)
        lista.append(card);
    }
}

let listaHamburguesasSimples = document.getElementById("listaHamburguesasSimples")
elegirHamburguesa(hamburguesasSimples, listaHamburguesasSimples);

let listaHamburguesasDobles = document.getElementById("listaHamburguesasDobles")
elegirHamburguesa(hamburguesasDobles, listaHamburguesasDobles);

let listaHamburguesasVegetarianas = document.getElementById("listaHamburguesasVegetarianas")
elegirHamburguesa(hamburguesasVegetarianas, listaHamburguesasVegetarianas);

let listaHamburguesasSinTacc = document.getElementById("listaHamburguesasSinTacc")
elegirHamburguesa(hamburguesasSinTacc, listaHamburguesasSinTacc);

// BOTON AGREGAR AL CARRITO - Por el momento este evento solo sucede en la primer hamburguesa de la lista de hamburguesas simples
let tarjeta = document.getElementById("card1");

let tarjetaInactiva = document.getElementById("cardInactiva1");

tarjeta.addEventListener("mouseenter", () => {
    tarjetaInactiva.classList.add("cardInactiva");
    tarjetaInactiva.classList.remove("inactivo")
})

tarjeta.addEventListener("mouseleave", () => {
    tarjetaInactiva.classList.remove("cardInactiva");
    tarjetaInactiva.classList.add("inactivo");
})
