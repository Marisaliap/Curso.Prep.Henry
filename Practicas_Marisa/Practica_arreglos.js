"Marisa es hermosa!"[17] // un string es un arreglo [] de caracteres
"Marisa es hermosa".length
"Marisa es hermosa"["Marisa es hermosa".length - 1]

var listaCompra = ["yerba", "peras", "miel", "huevos"] // creo un array con artículos de la lista de la compra
listaCompra[listaCompra.length - 1] // accedo al último elemento de un arreglo
var j = 2;  // asigno a una nueva variable j el elemento ubicado en la posición 2 del array listacompra
listaCompra[j] // al invocar el elemento j del array me devuelve miel (posición 2) 

// AGREGAR ELEMENTOS

listaCompra[10] = "yogurt";  // agrego yogurt a la posición 10 del arreglo listacompra
listaCompra                  // ahora tengo todos los elementos más 6 empty items que son undefined

listaCompra.push("leche"); 
listaCompra.push("aceite de oliva"); 
listaCompra.push("fideos", "galletitas", "pan");
listaCompra

// push es una función nativa de los arreglos que nos permite agregar elementos al                                        // final del arreglo, en este caso agregué leche a la última posición

// pop es una función nativa de los arreglos que nos devuelve un elemento, pero además quita el elemento de la última posición de la lista, en este caso quito aceite de oliva que está en la última posición


var listaNoComprar = listaCompra.pop();
listaNoComprar  // me devuelve pan porque era el último elemento de la listacompra
listaCompra.pop()  // quita el último elemento sin guardarlo en ningún lado xque no le asigné ninguna variable
listaCompra     // quitó ese elemento de la lista

var lista = [1, 2, 3, 4, 5]
for (var i= 0; i < lista.length; i++) {
console.log(lista[i])
}

// Tengo un valor que se llama i que va a ir avanzando desde cero hasta lista.length. Si tengo un valor que va recorriendo entre la posición 0 y la posición 4 (en este ejemplo), y se accede con el nombre del arreglo - sub el índice, entonces i va a ser el índice y yo voy a acceder directamente al arreglo sub i. En este caso imprimo con console.log todos los elementos del array porque escribo lista[i]

var lista = [ 1, 2, 3, 4, 5, 6, 7, 8, "Marisa", "Leo", "Eneas"]
while (lista.length > 0) {
console.log(lista.pop())
}

lista // queda un arreglo vacío

// También puedo recorrer un arreglo con el bucle while y le puedo indicar que mientras la longitud del arreglo sea mayor que cero, imprima lista.pop que significa que ira quitando de a uno los elementos del arreglo hasta que quede vacío.



  


