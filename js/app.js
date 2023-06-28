class productos {
    constructor (pn, producto, marca, descripcion, precio) {
        this.pn = pn;
        this.producto = producto;
        this.marca = marca;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = 1;
    }
}

class listaProducto {
    constructor () {
        this.listaProducto = []
    }

    lista () {
        this.listaProducto = [
            new producto(001, "Lavadero exterior", ""
        ]
    }
}