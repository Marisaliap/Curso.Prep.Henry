// No cambiar nombre de funciones.

function mayorMenosMenor(arr) {
    // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
    // NOTA: No utilizar los métodos "min" y "max" de "Math".
    //       
    // Tu código:
    var maximo = arr[0];
    var minimo = arr[0];
    (maximo === minimo) === arr[0];
    for (var i = 1; i < arr.length; i++) {
        var value = arr[i];
        minimo = value < minimo ? value : minimo;
        maximo = value > maximo ? value : maximo;
        var resultado = maximo - minimo;
    }
    return resultado;
};

function ingredienteEnMalEstado(menu, comida, ingrediente) {
    // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
    // ya que deben estar contaminados también.
    // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
    // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
    // diferencia.
    // Ej:
    /* let menuDelDia = {
        raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
        bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
        tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
    } */
    // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
    // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
    // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
    // NOTA: No utilizar el método "includes".
    //
    // Tu código:var comidaPasada1 = "";
    var BadFood1 = "";
    var BadFood2 = "";
    var BadFood3 = "";
    var BadFood = [];
    for (var i = 0; i < menu[comida].length; i++) {
      if (menu[comida][i] === ingrediente) {
        BadFood1 = menu[comida][i];
        BadFood2 = menu[comida][i - 1];
        BadFood3 = menu[comida][i + 1];
        BadFood.push(BadFood2, BadFood1, BadFood3);
        return BadFood;
      } else if (menu[comida].indexOf(ingrediente) === -1) {
        return "El menu esta perfecto";
      }
    }
};

function bienvenidoSr(persona) {
    // La funcion recibe un objeto "persona".
    // de la forma: 
    // {
    //  nombre: 'Lionel
    //  apellido: 'Messi',
    //  invitado: true
    //  }
    // Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna:
    // "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar:
    // "Bienvenido Sr. Messi".
    // Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar:
    // "Hola Lionel, tu mesa está lista".
    // En caso de que no tenga la propiedad "invitado" retornar:
    // "Disculpe señor, no está invitado a la fiesta".
    //
    // Tu código:
    var invitado = persona.invitado
    if ((persona.invitado) && (persona.nombre) && (persona.apellido)) {
        return persona.nombre + " " + persona.apellido + "," + " " + "un gusto tenerlo nuevamente! Bienvenido";
    }
    if ((persona.invitado) && (persona.apellido)) {
        return "Bienvenido" + " Sr. " + persona.apellido;
    }
    if ((persona.invitado) && (persona.nombre)) {
        return "Hola" + " " + persona.nombre + "," + " tu mesa está lista";
    }
    persona.hasOwnProperty(invitado) 
        return "Disculpe señor, no está invitado a la fiesta";
    
};

function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
    // "estudiantes" es un array de objetos "estudiante". Crea un nuevo array con el nombre y apellido de los estudiantes
    // que en sus propiedades "check1" y "check2", tengan una nota mayor o igual a "nota1" y "nota2" respectivamente.
    // Ej:
    /* var estudiantes = [
        { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
        { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
        { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
        { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
    ] */
    // obtenerSoloLosMejores(estudiantes, 15, 15); retorna => ["Fulanito Rodriguez", "Perengano Leiria"];
    //
    // Tu código:
    var mejores = [];
    for (estudiante in estudiantes){
    if (estudiante.check1 >= nota1 && estudiante.check2 >= nota2){
        mejores.push(estudiante.nombre + " " + estudiante.apellido)
        }
    } return mejores;
 };

function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan con el numero recibido como argumento (num).
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:
    return arreglo.filter(function (quitar) {
        return quitar !== num;
      });
 };

function clavesUnicas(obj1, obj2) {
    // La funcion recibe dos objetos "obj1" y "obj2".
    // Retornar las keys de las propiedades que sean únicas en cada objeto.
    // Ej:
    // let obj1 = {nombre: "Luciano", apellido: "Nicolau"}
    // let obj2 = {nombre: "Lio", segundoNombre: "Gustavo"}
    // clavesUnicas(obj1, obj2) retorna => ["apellido", "segundoNombre"];
    //
    // Tu código`:
    var clavesUnicas = [];
    if (obj1.hasOwnProperty !== obj2.hasOwnProperty) {
       clavesUnicas.push(obj1, obj2)
    }
    return clavesUnicas;


};

function invertirLetras(frase) {
    // La funcion recibe un string "frase". Convertir las letras en minúsculas a mayúsculas y viceversa y devolver
    // la frase con dichos cambios.
    // TIP: Usar toLowerCase y toUpperCase
    // Para saber si un char es upper o lower, comparalo con el mismo char en upper o lower;
    // ej:
    //  'i' === 'i'.toLowerCase(); -> es lower; Soy Henry 
    //  'I' === 'I'.toLowerCase()l -> no es lower; s
    // Tu código:
    var fraseNueva = []
    for (var i = 0; i < frase.length; i++) {
    if (frase[i] === frase[i].toUpperCase()) {
        fraseNueva.push(frase[i].toLowerCase());

      } else {
      fraseNueva.push(frase[i].toUpperCase()); 
      }
    } return fraseNueva.join(``);

};

// =======================================================================

function crearClaseAlumno() {
    class Alumno {
        constructor (nombre, apellido, cohorte, grupoDeAmigos, notasCheckpoints) {
            // El constructor de la clase recibe nombre (string), apellido (string), cohorte (number), 
            // grupoDeAmigos (array de objetos), notasCheckpoints (array de numbers).
            // Inicializar las propiedades del alumno con los valores recibidos como argumento.
            //
            // Tu código:
            this.nombre = nombre; 
            this.apellido = apellido;
            this.cohorte = cohorte;
            this.grupoDeAmigos = grupoDeAmigos;
            this.notasCheckpoints = notasCheckpoints;
            
        };

        addAmigos(nombre, apellido) {
            // Este método debe agregar amigos al array de grupoDeAmigos del alumno.
            // Añade un objeto con las propiedades "nombre", "apellido" y "cohorte" (siendo 
            // el value de cohorte el mismo que tiene asignado la instancia de "Alumno") 
            // en el array de grupoDeAmigos.
            // No debe retornar nada.
            //
            // Tu código:
            
            this.grupoDeAmigos.push({nombre, apellido, cohorte:1})
        };

        obtenerAmigos() {
            // Este método debe devolver la cantidad de amigos que tiene el alumno.
            // return this.grupoDeAmigos.length;
            // var Cant = 0;
            // for (var i = 0; i < this.grupoDeAmigos.length; i++) {
            //    Cant = Cant + this.grupoDeAmigos[i].cohorte
            // } return Cant;
            // Tu código:
            return this.grupoDeAmigos.length;
          
        };

        addNota(nota) {
            // Este método añade una nota al array de notasCheckpoints
            // No debe retornar nada.
            //
            // Tu código:
            this.notasCheckpoints.push(nota);

        };

        obtenerNotas() {
            // Este método debe devolver un array con las notas del alumno.
            //
            // Tu código:
            return this.notasCheckpoints;
        };

        presentacion() {
            // Este método debe devolver un string utilizando el nombre, el apellido y 
            // el cohorte del alumno.
            // Ej: Si ejecutamos presentacion() en la instancia de alumno, devolvería: 
            // "Hola, soy el alumno Lionel Messi del cohorte 13";
            //
            // Tu código:
            return "Hola, soy el alumno " + this.nombre + " " + this.apellido + " " + "del" + " cohorte " + this.cohorte
        };
        
    };

    return Alumno;
};

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function intercambio(objeto) {
    // Devolver un objeto con los pares clave-valor intercambiados.
    // Ej: intercambio({ nombre: "Fulano", apellido: "Rodriguez" }); devuelve => { Fulano: "nombre", Rodriguez: "apellido" }
    // NOTA: No utilizar métodos de Object (values, keys, entries);
    //
    // Tu código:

};



// No modificar nada debajo de esta línea
// =======================================================================

module.exports = {
    mayorMenosMenor,
    ingredienteEnMalEstado,
    bienvenidoSr,
    obtenerSoloLosMejores,
    buscaDestruye,
    clavesUnicas,
    invertirLetras,
    crearClaseAlumno,
    intercambio
};
