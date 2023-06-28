class servcio {
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

alert("El total de los servicios a brindar es de $: " + seccionCompras.calcularTotal())