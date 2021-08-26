// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //return Object.entries(objeto);
  var array = [];
  for (var prop in objeto) {
    array.push([prop, objeto[prop]]);
  } return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /* var cont = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[1] + 1) {
      cont = cont + 1;
    }
  } return cont; */
  /* var obj = {};
  for ( var i = 0; i < string.length; i++) {
    var count = 0;
     if (!obj[string[i]])  {
        for (var j = 0; j < string.length; j++){
          if (string[i] === string[j]) {
            count ++;
          }
        }
        obj[string[i]] = count; 
    }
  }
  return obj; */
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 0;
    } obj[string[i]] = obj[string[i]] + 1;
  }
    return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  /* var mayusculas = "";
  var minusculas = "";
  for (var i = 0; i < s.length; i++) {
   if ( s[i] === s[i].toUpperCase()) {
      mayusculas += s[i];
    } else {
      minusculas += s[i];
  } 
  } return mayusculas + minusculas; */
  var may = "";
  var min = "";
  
   for (var i = 0; i< s.length; i++) {

      if (s[i] === s[i].toUpperCase()) {
       may = may + s[i];
       } else {
       min = min + s[i];
      }
   }
  return may + min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /* var arrayFraseInv = [];              //Split recibe un str "The Henry Challenge is close!" y retorna
  var arrayPalabras = str.split(" "); // un array ["The", "Henry", "Challenge", "is", "close!"]

  for (var i = 0; i < arrayPalabras.length; i++){   //Recorro el array de Palabras que acabo de crear
    var arrayLetras = arrayPalabras[i].split("");  // [["T", "h", "e"], [" "], ["H", "e", etc]] 
    var arrayLetrasInv = arrayLetras.reverse();    // [["e", "h", "T"], [" "], ["e", "H", etc]]
    arrayFraseInv.push(arrayLetrasInv.join(""));  // "ehT"," ","eHetc" //join devuelve un string otra vez
  }
  return arrayFraseInv.join(" ");  //Pusheo dentro del array vacío el string con otro join que va a 
  separar las palabras entre si con un espacio
   */  
  var palabra = "" ;             
  var palabraInv = "";            
  var stringInv = "";             
  
  for (i= 0; i <= str.length; i++){
    if (str[i] === " " || i === str.length) { 
    palabraInv = "";                                     
      for (var j = palabra.length - 1; j >= 0; j--){     
      palabraInv = palabraInv + palabra[j];  
      }
      palabra = "";       
      if (i === str.length){                      
      stringInv = stringInv + palabraInv;         
      } else { 
      stringInv = stringInv + palabraInv + " ";  
      }
    } else {
    palabra = palabra + str[i];
    } 
    }
    return stringInv;     
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str = numero.toString();
  var array = str.split("");
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== array[array.length - ( i + 1)]) {
    return "No es capicua";
    }
  } 
  return "Es capicua";
} 
   


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  /* cadena = cadena.replace("a", "");
  cadena = cadena.replace("b", "");
  cadena = cadena.replace("c", "");
  return cadena; */
  var array = cadena.split("");
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "a" || array[i] === "b" || array[i] === "c") {
      array.splice(i, 1);
      i--;
    }
  }
  return array.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nuevoArray = arr.sort(function( elementoActual, elementoSiguiente) {
    return elementoActual.length - elementoSiguiente.length
  });
  return nuevoArray;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArr = [];
  for ( var i = 0; i < arreglo1.length; i++) {
    for ( var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        nuevoArr.push(arreglo1[i]);
      }
    }
  }
  return nuevoArr; 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

