// DESARROLLO TALLER RAPPI 
// parte 1

const nombreCliente = "ronal";
let nombreCiudad = "bogota";
let rappiPrime = true
let productList = ["hamburguesa ","Papas ","Gaseosa "]
let estadoPedido = "en camino";

console.log("=== Rappi Pedido ===");

console.log(`
    Hola ${nombreCliente}, 
    tu pedido para la ciudad de ${nombreCiudad} esta en alistamiento.
    `);

// parte 2
console.log(productList);    // imprimimos la lista
console.log(productList[2]); //imprimimos solo producto en puesto 2
productList.push("Postre ");  //agrego otro producto
console.log(productList);    //imprime actualizado
productList.pop();           //quitamos ultimo agregado
console.log(productList);    //impreme actualizado
console.log(productList.length);    //cantidad de elementos en lista

// parte 3
let pedido = {nombre:nombreCliente, ciudad:nombreCiudad,productos: productList,estado:estadoPedido};

console.log(pedido); // imprime la lista - objeto
console.log(pedido.nombre); //imprime nombre desde el pedido
estadoPedido = "en entrega"; // cambie el estado
pedido.estado = estadoPedido; //se asigna el nuevo estado en el pedido
console.log(pedido); // imprime la lista - objeto  actualizado

let subtotal = "25000";
let domicilio = 3000;
const propina = (subtotal * 0.10);

let total = parseInt(subtotal) + domicilio + propina; // suma de un string con numero

console.log("total a pagar : " + total);

console.log(`
    ========   FACTURA DE PEDIDO ========
    usuario ${nombreCliente} :
    su pedido a la ciudad de ${nombreCiudad} se encuentra ${estadoPedido} 
    lista de compra:

    ${productList}

    valor productos:        ${subtotal}
    propina 10%:            ${propina}
    domicilio:              ${domicilio}
    total a pagar:          ${total}  <<
    =======  GRACIAS POR SU COMPRA ======
    
    `);

