let servicios =[{
    id: 11,
    title: "lavadero",
    nombre: "Lavado Exterior",
    precio: 3500,
    img: "./Assets/img/autolavado.jpg"
},
{
    id: 12,
    title: "lavadero",
    nombre: "Lavado Interior",
    precio: 3500,
    img: "./Assets/img/autolavado.jpg" 
},
{
    id: 13,
    title: "lavadero",
    nombre: "Lavado Motor",
    precio: 2500,
    img: "./Assets/img/limpiar-motor-coche.jpg"
},
{
    id: 14,
    title: "Mecanica",
    nombre: "Service Standard",
    precio: 9400,
    img: "./Assets/img/Mecanicagen.jpg"  
},
{
    id: 15,
    title: "Mecanica",
    nombre: "Tren Delantero",
    precio: 67000,
    img: "./Assets/img/Mecanicagen.jpg" 
},
{
    id: 16,
    title: "Mecanica",
    nombre: "Tren Trasero",
    precio: 53000,
    img: "./Assets/img/Mecanicagen.jpg"
},
]

rendeProducts(servicios)
function rendeProducts(listaServicios) {
    let menuServicios = document.getElementById ("menuServicios")
    menuServicios.innerHTML = ""

        listaServicios.forEach(elem => {

        let cardServicio = document.createElement("div") 
        cardServicio.className = "cardServicio col-sm-12 col-md-12 col-lg 12 col-xl-3 col-xxl-3"
        cardServicio.innerHTML = 
        `<h3>${elem.nombre}</h3>
        <img class="imgCard" src=${elem.img}>
        <p>Precio: $ ${elem.precio}</p>
        <button id=${elem.id} class="btnAgregar">Añadir</button>`

        menuServicios.append(cardServicio)
        let button = document.getElementById(elem.id)

        button.addEventListener("click", agregarACarrito)
        button.addEventListener("click", seAgrego)
        })
}

let carritoInicio = document.getElementById("carritoDOM")
let carrito = []

if (localStorage.getItem("carritoLocal")) {
    carrito = JSON.parse (localStorage.getItem("carritoLocal"))
    renderizarCarrito(carrito)
}

function seAgrego() {
    alert ("Servicio Añadido Correctamente.")
}

function renderizarCarrito(menuServicios) {
    carritoInicio.innerHTML = ""
    menuServicios.forEach(elem => {
        carritoInicio.innerHTML += `SE AGREGO: <p>${elem.nombre} Subtotal: $ ${el.subtotal}<p>`
    })
}
/*function AgregarACarrito (e){
    let 
}
/*class servcio {
    constructor (pn, servicio, descripcion, precio) {
        this.pn = pn;
        this.servicio = servicio;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = 1;
    }
}

class Productos {
    constructor () {
        this.listaProducto = []
    }

    lista () {
        this.listaProducto = [
            new servcio(1, "Lavado exterior", "Lavado completo exterior", 3500),
            new servcio(2, "Lavado interior", "Lavado completo interior", 3500),
            new servcio(3, "Lavado motor", "Lavado completo de motor", 2500),
            new servcio(4, "Service standard", "Cambio de filtros y fluidos", 9400),
            new servcio(5, "Tren delantero", "Rotulas, bujes, amortiguadores, parrillas, extremos,", 67000),
            new servcio(6, "Tren trasero", "Rotulas, bujes, aortuguadores, extremos, ", 53000),
        ]
    }

    verLista() {
        let pedido = ""
        this.listaProducto.forEach(servcio => {
            pedido += "\npn: " + servcio.pn + "\nServicio: " + servcio.servicio + "\nDescripcion: " + servcio.descripcion + "\nPrecio: $" + servcio.precio
        })
        return pedido
    }

    buscarProducto (seleccion) {
        return this.listaProducto.find(servicio => servicio.pn == seleccion)
    }

    agregarServicio (servicio) {
        this.listaProducto.push(servicio)
    }
}

class SeccionCompras {
    constructor() {
        this.carrito = []
    }

    agregar(servicio) {
        this.carrito.push(servicio)
    }

    calcularTotal() {
        return this.carrito.reduce((pedido, servicio) => pedido + servicio.precio * servicio.cantidad, 0)
    }
}

const productos = new Productos()
const seccionCompras = new SeccionCompras()
productos.lista()

let respuesta = ""

do {
    alert(productos.verLista())

    let seleccion = prompt("Ingrese PN para agregar el servicio deseado")
    const servicio = productos.buscarProducto(seleccion)
    if (servicio) {
        seccionCompras.agregar(servicio)
    } else {
        alert("El servcio seleccionado no esta disponible")
    }

    respuesta = prompt("escribir 'LISTO' para finalizar su pedido o cualquier tecla agregar otro servicio").toUpperCase()
} while (respuesta != "LISTO")

alert("El total de los servicios a brindar es de $: " + seccionCompras.calcularTotal())*/