var productos = [
    {
        id: 1,
        nombre: "harina",
        precioUnitario: 35,
        cantidad: 9
    },
    {
        id: 2,        
        nombre: "pan",
        precioUnitario: 25,
        cantidad: 120
    },
    {
        id: 3,
        nombre: "papa",
        precioUnitario: 52,
        cantidad: 20
    },
    {
        id: 4,
        nombre: "palta",
        precioUnitario: 55,
        cantidad: 23
    },
    {
        id: 5,
        nombre: "fideos",
        precioUnitario: 85,
        cantidad: 58
    },
    {
        id: 6,
        nombre: "aceite",
        precioUnitario: 350,
        cantidad: 85
    },
    {
        id: 7,
        nombre: "sopa",
        precioUnitario: 86,
        cantidad: 12
    },
    {
        id: 8,
        nombre: "mermelada",
        precioUnitario: 108,
        cantidad: 58
    },
    {
        id: 9,
        nombre: "porotos",
        precioUnitario: 69,
        cantidad: 74
    },
    {
        id: 10,
        nombre: "lentejas",
        precioUnitario: 85,
        cantidad: 14
    },

];

// Pasar los elementos que estan en el vector a una tabla llamada Productos

function crearElementoTabla(productos){

    //Nombre
    var tdNombre = document.createElement("td");
    var txtNombre = document.createTextNode(productos.nombre);
    tdNombre.appendChild(txtNombre);
        
    //Precio
    var tdPrecio = document.createElement("td");
    var txtPrecio = document.createTextNode(productos.precioUnitario);
    tdPrecio.appendChild(txtPrecio);
    
    //Cantidad
    var tdCantidad = document.createElement("td");
    var txtCantidad = document.createTextNode(productos.cantidad);
    tdCantidad.appendChild(txtCantidad);
        
         
    // Crear el input para la cantidad de Productos
    
    //Input
    var tdInput = document.createElement("td");
    var inputCantidad = document.createElement("input");
    inputCantidad.setAttribute("type", "text");
    tdInput.appendChild(inputCantidad);
    
    // Crear los botones con sus eventos: que "Comprar" agregue el producto a la tabla Carrito (creando otro vector? o solo agregandolo a la tabla?)
    
    //Boton Comprar
    var tdBotonComprar = document.createElement("td");
    var btnComprar = document.createElement("button");
    var txtBotonComprar = document.createTextNode("Comprar");
    btnComprar.appendChild(txtBotonComprar);
    btnComprar.addEventListener("click", AgregarCarrito);
    tdBotonComprar.appendChild(btnComprar);
        
    //table row
    var tr = document.createElement("tr");
    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdCantidad);
    tr.appendChild(tdInput);
    tr.appendChild(tdBotonComprar);
    
    var tbody = document.querySelector("#tablaComprar");
    
    tbody.appendChild(tr);
}

productos.forEach(item => {
    crearElementoTabla(item);
});

     // Crear una funcion para generar una tabla con los articulos seleccionados

function AgregarCarrito(e){
    
        var cantidadCompra = parseInt(e.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.value);
        var stock = parseInt(e.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.innerHTML);

        var mensaje = document.querySelector("#mensaje");

        console.log("cantidad:"+cantidadCompra+"stock:"+stock)

        if(cantidadCompra > stock){
            mensaje.innerHTML = "Por el momento no hay suficiente stock de este artículo"
        
        }
        else{
            var nombreProducto = e.target.parentNode.parentNode.firstChild.innerHTML;
            console.log(nombreProducto);
            var find = listaVacia.findIndex(elemento => elemento == nombreProducto);
            if(find != -1){

                    mensaje.innerHTML = "El producto seleccionado ya fue agregado a su Carrito de Compras"
                }
            else{
                                
                //Nombre2    
                var tdNombre2 = document.createElement("td");
                var txtNombre2 = document.createTextNode(e.target.parentNode.parentNode.firstChild.innerHTML);
                tdNombre2.appendChild(txtNombre2);

            //Cantidad2
                var tdCantidad2 = document.createElement("td");
                var txtCantidad2 = document.createTextNode(e.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.value);
                tdCantidad2.appendChild(txtCantidad2);

            //PrecioUnitario
                var tdPrecioUnitario = document.createElement("td");
                var txtPrecioUnitario = document.createTextNode(e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML);
                tdPrecioUnitario.appendChild(txtPrecioUnitario);

            //Boton Quitar
                var tdBotonBorrar = document.createElement("td");
                var btnBorrar = document.createElement("button");
                var txtBotonBorrar = document.createTextNode("Quitar");
                btnBorrar.appendChild(txtBotonBorrar);
                tdBotonBorrar.appendChild(btnBorrar);
                btnBorrar.addEventListener("click", borrarElemento);

            //table row
                var tr2 = document.createElement("tr");
                tr2.appendChild(tdNombre2);
                tr2.appendChild(tdPrecioUnitario);
                tr2.appendChild(tdCantidad2);
                tr2.appendChild(tdBotonBorrar);

                var tbody2 = document.querySelector("#tablaCarrito");
                tbody2.appendChild(tr2);

                listaVacia.push(nombreProducto);
                            console.log(listaVacia);

            // Sumar a un contador el precio de los articulos seleccionados

                contador = contador + (parseInt(e.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.value) * parseInt(e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML));
                console.log(contador);


            }}        }

              
var contador = 0;   

var listaVacia = [];

var mensaje2 = document.querySelector("#vacio");


// Crear una funcion para que el boton Quitar elimine el articulo seleccionado

function borrarElemento(e){
    var borrar = e.target.parentNode.parentNode;
    borrar.parentNode.removeChild(borrar)

    var restarCantidad = e.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.innerHTML;
    var restarPrecio = e.target.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    contador = contador - (restarCantidad * restarPrecio);
    console.log(contador)

    var restarNombre = e.target.parentNode.parentNode.firstChild.innerHTML;
    var indice = listaVacia.findIndex(elemento => elemento == restarNombre);
    listaVacia.splice(indice, 1);
    console.log(listaVacia);
}

//Crear un botón y una función para finalizar la compra
var totalCompra = document.getElementById("totalCompra");
totalCompra.addEventListener("click", finalizarCompra);        

function finalizarCompra (){
    if(contador == 0){
        mensaje.innerHTML = "Su Carrito de Compras se encuentra vacío"
    }
    else{
        totalCompra.innerHTML= "El valor total de su compra es de $ "+contador;
        mensaje2.innerHTML= "Muchas gracias por su compra! Vuelvas prontos!!"
    }
}

