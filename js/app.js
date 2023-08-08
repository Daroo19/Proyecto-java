/*let servicios = [{
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
]*/

fetch ("./data")
  .then(res => res.json())
  .then(servicios => {
    api(servicios)
  })
    .catch((error) => 

      Swal.fire({

        icon: 'error',
        title: 'Falla Servidor',
        background: 'rgb(116, 108, 108)',
        color: 'white'
    
      })
    
    )
function api(servcios) {
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
    let buscadoCarrito = servicios.find(({ nombre, img, precio, id }) => id === Number(e.target.id))
    let position = servcios.findIndex(({ nombre, img, precio, id }) => id === Number(e.target.id))
    
    if (servcios[position].stock > 0) {
        let spanId = document.getElementById("span" + e.target.id)
        servcios[position].stock--
        spanId.innerHTML = servcios[position].stock

        if (carrito.some ((({ nombre, img, precio, id }) => id == buscadoCarrito.id))) {
            let posicionServicio = carrito.findIndex((({ nombre, img, precio, id }) => id == buscadoCarrito.id))
            carrito[posicionServicio].unidades++
            carrito[posicionServicio].subtotal = carrito[posicionServicio].precio * carrito[posicionServicio].unidades
        } else {
            carrito.push({
                nombre: buscadoCarrito.nombre,
                precio: buscadoCarrito.precio,
                subtotal: buscadoCarrito.precio,
              })
        }
    } else {
        Swal.fire({

            icon: 'error',
            title: 'No hay turnos disponibles',
            background: 'rgb(116, 108, 108)',
            color: 'white'
        
          })
        }
  
    localStorage.setItem("carritoLocal", JSON.stringify(carrito));

    renderizarCarrito(carrito)

  }

  function seAgrego() {

    Toastify({
  
      text: "SE AGREGÓ AL CARRITO",
      duration: 1500,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(90deg, rgba(3,6,98,1) 9%, rgba(4,15,156,1) 32%, rgba(14,27,207,1) 55%, rgba(37,51,233,1) 81%, rgba(61,71,242,1) 97%)",
      }
      
    }).showToast();
  
  }


function renderizarCarrito(menuServicios) {
    carritoInicio.innerHTML = ""
    let total = carrito.reduce ((acc,prod) => prod.subtotal, 0)
    menuServicios.forEach(({ nombre, img, precio, id }) => {
        carritoInicio.innerHTML += `SE AGREGO: <p>${nombre} Subtotal: $ ${subtotal}<p>`
    })
    carritoInicio.innerHTML += `<span class="total">Su Total es: $ ${total}`
}

let autenUsu = document.getElementById("autenUsu")
let registroCliente = document.getElementById("registro")

autenUsu.classList.add("claseUsuario")
registroCliente.classList.add("claseUsuario")

let containerServicios = document.getElementById("serviciosNitro")
let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let registrarse = document.getElementById("registrar")

registrarse.classList.add("btnUsuario")

registrarse.addEventListener("click", () => {
    console.log(usuario.value)
    console.log(contrasenia.value)

    let informacion = {usuario: usuario.value, contrasenia: contrasenia.value}
    let JSONinformacion = JSON.stringify (informacion)
    localStorage.setItem("informacion", JSONinformacion)

    if ((isNaN(usuario.value)) && contrasenia.value !== isNaN) {
        registro() 

      } else {
        registroError()
      }
    
})

function registro(){

    Swal.fire({
        icon: 'success',
        title: 'Registro completado correctamente.',
        background: 'rgb(116, 108, 108)',
        color: 'white'
    
      })
}

function registroError() {

    Swal.fire({
      icon: 'error',
      title: 'Algo salio mal, intenta nuevamente.',
      background: 'rgb(116, 108, 108)',
      color: 'white'
  
    })
  
  }

  let usuarioInicio = document.getElementById("usuarioInicio")
  let contraseniaInicio = document.getElementById("contraseñaInicio")
  let iniciarSesion = document.getElementById("inicio")

  iniciarSesion.classList.add("btnUsuario")

  registrarse.addEventListener("click", () => {
    console.log(usuario.value)
    console.log(contrasenia.value)

    let informacion = JSON.parse(localStorage.getItem("informacion"))

    if (informacion.usuario == usuarioInicio.value && informacion.contrasenia == contraseniaInicio.value) {
  
      Bienvenido()  
      containerServicios.classList.remove("ocultar")
      autenUsu.classList.add("ocultar")
      registroCliente.classList.add("ocultar")
  
    } else {
      inicioError()
    }
  })
  
  function Bienvenido() {
  
    Swal.fire({
      title: 'Bienvenido al taller mecanico NITRO',
      imageUrl: 'https://media.glamour.mx/photos/61904b932d97bd4c522a19cc/master/w_1600%2Cc_limit/269428.jpeg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      background: 'rgb(116, 108, 108)',
      color: 'white'
  
    })
  }
  
  function inicioError() {
  
    Swal.fire({
      icon: 'error',
      title: 'Los datos ingresados no son correctos.',
      background: 'rgb(116, 108, 108)',
      color: 'white'
  
    })
  
  }

  let buscador = document.getElementById ("btnSearch")
  let inputBuscador = document.getElementById("inputSearch")

  buscador.addEventListener("click", filtro)

  function filtro(){
    let filtro = servicios.filter ((({ nombre, img, precio, id }) => nombre.incldes(inputBuscador.value)))
    renderProducts(filtro)
  }

  let confirmarCompra = document.getElementById("Confirmar")
  let vaciarCarrito = document.getElementById("Vaciar Carro")

  confirmarCompra.addEventListener("click", confirmar)
  vaciarCarrito.addEventListener("click", vaciar)

  function confirmar() {
    Toastify({
      text: "Tu compra se realizo con exito!!",
      duration: 2000,
      close: false,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(90deg, rgba(3,6,98,1) 9%, rgba(4,15,156,1) 32%, rgba(14,27,207,1) 55%, rgba(37,51,233,1) 81%, rgba(61,71,242,1) 97%)",
        weight: "bold",
      }
    }).showToast();

    carritoInicio.innerHTML = ""
    carrito = []
    localStorage.removeItem("carritoLocal")
  }

  function vaciar() {
    Toastify({
      text: "Vaciaste el carrito.",
      duration: 2000,
      close: false,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "red",
    },
    
  }).showToast(); 

    carritoInicio.innerHTML = "" 
    carrito = []
    localStorage.removeItem("carritoLocal")

  }
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