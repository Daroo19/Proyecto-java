let servicios = [{
    id: 1,
    title: "lavadero",
    nombre: "Lavado Exterior",
    precio: 3500,
    img: "./assets/img/autolavado.jpg"
},
{
    id: 2,
    title: "lavadero",
    nombre: "Lavado Interior",
    precio: 3500,
    img: "./assets/img/autolavado.jpg"
},
{
    id: 3,
    title: "lavadero",
    nombre: "Lavado Motor",
    precio: 2500,
    img: "./assets/img/limpiar-motor-coche.jpg"
},
{
    id: 4,
    title: "Mecanica",
    nombre: "Service Standard",
    precio: 9400,
    img: "./assets/img/Mecanicagen.jpg"
},
{
    id: 5,
    title: "Mecanica",
    nombre: "Tren Delantero",
    precio: 67000,
    img: "./assets/img/Mecanicagen.jpg"
},
{
    id: 6,
    title: "Mecanica",
    nombre: "Tren Trasero",
    precio: 53000,
    img: "./assets/img/Mecanicagen.jpg"
},
]

renderProducts(servicios)
function renderProducts(listaServicios) {
    let menuServicios = document.getElementById("menuServicios")
    menuServicios.innerHTML = ""

    listaServicios.forEach(({ nombre, img, precio, id }) => {

        let cardServicio = document.createElement("div")
        cardServicio.className = "cardServicio col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3"
        cardServicio.innerHTML =
            `<h3>${nombre}</h3>
        <img class="imgCard" src=${img}>
        <p>Precio: $ ${precio}</p>
        <button id=${id} class="btnAgregar">Añadir</button>`

        menuServicios.append(cardServicio)
        let button = document.getElementById(id)

        button.addEventListener("click", agregarACarrito)
        button.addEventListener("click", seAgrego)
    })
}

let carritoInicio = document.getElementById("listadoDOM")
let carrito = []

if (localStorage.getItem("carritoLocal")) {
    carrito = JSON.parse(localStorage.getItem("carritoLocal"))
    renderizarCarrito(carrito)
}

function agregarACarrito(e) {
    let buscadoCarrito = servicios.find(({ nombre, img, precio, id }) => id === Number(e.target.id));
    carrito.push({
      nombre: buscadoCarrito.nombre,
      precio: buscadoCarrito.precio,
      subtotal: buscadoCarrito.precio,
    })
  
    localStorage.setItem("carritoLocal", JSON.stringify(carrito));

    renderizarCarrito(carrito)

  }


function renderizarCarrito(menuServicios) {
    carritoInicio.innerHTML = ""
    menuServicios.forEach(({ nombre, img, precio, id }) => {
        carritoInicio.innerHTML += `SE AGREGO: <p>${nombre} Subtotal: $ ${subtotal}<p>`
    })
}
function seAgrego() {
    alert("Servicio Añadido Correctamente.")
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