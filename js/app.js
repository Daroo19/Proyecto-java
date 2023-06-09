let negocio
let producto
let precio
let cantidad
let total = 0
let opcion


alert("Calculadora de precios, para continuar presione aceptar")

negocio = prompt("Nombre de local")



do {
    producto = parseInt(prompt("producto que desea comprar")) 
    precio = Number(prompt("Precio"))

    while (precio <= 0) {
        precio = prompt("No ingreso un valor")
    }

    cantidad = parseInt(prompt("Cantidad"))
    while (cantidad <= 0){
        cantidad = prompt("No ingreso un valor")
    }
    opcion = prompt ("Desea agregar mas productos? si/no")
    total = total + precio * cantidad   
}   while (opcion == "si")

alert (negocio + " el total de su compra es de " + total + " pesos")
