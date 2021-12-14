// Valores en JavaScript

40;

("Joseph Alejandro");

true;
false;

null;
undefined[(1, 2, 3)];

{
  nombre: "Joseph";
}

// Declaración de variables

var nombre = "Joseph";

// declarar
var edad;
// inicializar
edad = 22;
// resultado
edad;

var elementos = ["Computadora", "Celular"];

var persona = {
  nombre: "Joseph",
  apellido: "Alejandro",
  edad: 22,
};

// Funciones

// declarativas

function miFuncion() {
  return 3;
}

// expresiones

var miFuncion2 = function (a, b) {
  return a + b;
};

miFuncion2(1, 2);

// Hoisting

console.log(miNombre);

var miNombre = "Joseph";

hey();

function hey() {
  console.log("Hola" + miNombre);
}
// Estructuras de control

// Toma de decisiones
// If
if ("Juan" === "Juan") {
  console.log("El resultado es verdadero")
}
// Switch

switch ("1") {
  case "1":
    console.log("Usted ha seleccionado el número uno")
    break;
  case "2":

    console.log("Usted ha seleccionado el número dos")
    break
  default:
    break;
}
// Ternario

console.log("1" === "1" ? "Usted ha seleccionado el número uno" : "Usted no ha seleccionado el número uno")


// Bucles
let numero = 10;

// for
for (let index = 0; index < numero; index++) {
  console.log("Estoy haciendo un bucle :D " + index);
}

// While

while (numero > 1) {
  console.log("Estoy haciendo un bucle :D " + numero);
  numero--;
}

// Do-While

do {
  console.log("Estoy haciendo un bucle :D" + numero);
  nombre--;
} while (10 < 1);

// objeto JSON

let json = {
  "nombre": "Juan",
  "Edad": 20,
  "Ciudad:": "Machala"
}

json = JSON.stringify(json)

json = JSON.parse(json)

console.log(json)

// LocalStorage

localStorage.setItem("Juan", JSON.stringify(
  {
    "nombre": "Juan",
    "Edad": 20,
    "Ciudad:": "Machala"
  }));


// Arrays

var arrayExample = new Array();
arrayExample.push("uno");
arrayExample.push("dos");
arrayExample.push("tres");


var arrayExample2 = [
  "Uno", "Dos", "Tres"
]

// Objeto

/* {
  nombre: 'Juan',
  Edad: 20,
  Ciudad: "Machala"
} */

let miObjeto = {
  nombre: 'Juan',
  Edad: 20,
  Ciudad: "Machala"
}

