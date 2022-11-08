class Platillo {
  constructor(nombre, precio, descripcion,id) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.id = id;
  }
}

const cafe = new Platillo("Cafe", 4, "viene acompañado con pan",0);
const sanduche = new Platillo("Sanduche", 6, "con jamon y queso",1);
const te = new Platillo("Te", 2, "viene con galletas",2);

let carrito = [];

let compraUsuario;

let subtotalCarrito = 0;

let opcionComprarMas = "";

let mensajeSegunVecesCompradas;

let totalCompra = "";

const cantidadProductos = {
  [cafe.id]:0,
  [te.id]:0,
  [sanduche.id]:0,
}

do {
 

  if (carrito.length == 0) {
    mensajeSegunVecesCompradas = "¡Hola! ¿Que te gustaría pedir";
  } else {
    opcionComprarMas = "4.No quiero comprar más";
    mensajeSegunVecesCompradas =
      "¡Genial! ¿Quieres pedir algo mas? (Presiona 4 para continuar sin pedir nada mas)";
    totalCompra = "Total de la compra hasta ahora = $" + subtotalCarrito;
  }

  let mensajePrincipal = `${mensajeSegunVecesCompradas}:
    
      1.Cafe
      2.Sanduche
      3.Te
      ${opcionComprarMas}
      
      ${subtotalCarrito == 0 ? "" : totalCompra}`;

  compraUsuario = parseInt(prompt(mensajePrincipal));

  switch (compraUsuario) {
    case 1:
      carrito.push(cafe);
      subtotalCarrito += cafe.precio;
      cantidadProductos[cafe.id]=cantidadProductos[cafe.id]+1
      break;
    case 2:
      carrito.push(sanduche);
      subtotalCarrito += sanduche.precio;
      cantidadProductos[sanduche.id]=cantidadProductos[sanduche.id]+1
      break;
    case 3:
      carrito.push(te);
      subtotalCarrito += te.precio;
      cantidadProductos[te.id]=cantidadProductos[te.id]+1
      break;
    default:
      break;
  }
} while (compraUsuario > 0 && compraUsuario <= 3 && compraUsuario < 5);

// const totalProductosYnombres = carrito.map((producto)=>{
// return `${}`
// })

let factura = `¡Gracias por su compra! Su recibo: 

${cantidadProductos[cafe.id] ? `${cafe.nombre} x ${cantidadProductos[cafe.id]} = $${cafe.precio*cantidadProductos[cafe.id]}` : ""}
${cantidadProductos[te.id] ? `${te.nombre} x ${cantidadProductos[te.id]} = $${te.precio*cantidadProductos[te.id]}` : ""}
${cantidadProductos[sanduche.id] ? `${sanduche.nombre} x ${cantidadProductos[sanduche.id]} = $${sanduche.precio*cantidadProductos[sanduche.id]}` : ""}

Total a pagar = $${subtotalCarrito}`;

alert(factura);



