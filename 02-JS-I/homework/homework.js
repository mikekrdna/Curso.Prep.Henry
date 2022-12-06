// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 7;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x=5, y=5) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
    suma= x + y;
  return suma;
}

function resta(x=3, y=6) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
    resta= x - y;
return resta;
}

function multiplica(x=5, y=-10) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  multiplica= x * y;
  return multiplica;
}

function divide(x=25, y=5) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  divide= x / y;
  return divide;
}

function sonIguales(x=prueba, y=prueba) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x==y)
  return true;
  else return false;
}

function tienenMismaLongitud(str1="flash", str2="flash") {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length == str2.length)
 return true;
 else return false;
}

function menosQueNoventa(num=50) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90)
  return true;
  else return false;
}

function mayorQueCincuenta(num=55) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50)
  return true;
  else return false;
}

function obtenerResto(x=15, y=5) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  obtenerResto = x % y;
  return obtenerResto;
}

function esPar(num = 8) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((num  % 2) == 0)
  return true;
  else return false;
}

function esImpar(num = 9) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((num % 2) == 1)
  return true;
  else return false;
}

function elevarAlCuadrado(num=8) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  elevado= Math.pow (num, 2);
  return elevado;
}

function elevarAlCubo(num=7) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  elevado = Math.pow (num , 3);
  return elevado;
}

function elevar(num=5, exponent=2) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  elevado =  Math.pow(num , exponent);
  return elevado;
}

function redondearNumero(num = 5.25)  {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  redondeado = Math.round (num);
  return redondeado;
}

function redondearHaciaArriba(num = 9.59) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  redondoarriba = Math.ceil (num);
  return redondoarriba;
}

function numeroRandom () {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random ();
}

function esPositivo(numero = 5) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0 ) {
  return ("Es positivo")
  }  else if (numero < 0){
    return ("Es negativo")
  } else return false;
  }



function agregarSimboloExclamacion(str = "hello world") {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  agregarsimbolo = (str + "!");
  return agregarsimbolo;
}

function combinarNombres(nombre = "Miguel", apellido= "Cardona") {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  nombrecompleto = (nombre + " " + apellido);
  return nombrecompleto;
}

function obtenerSaludo(nombre= "Miguel") {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  saludo = ("Hola " + nombre + "!");
  return saludo;
}

function obtenerAreaRectangulo(alto = 5, ancho = 9) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  arearectangulo = alto * ancho;
  return arearectangulo;
}


function retornarPerimetro (lado = 8){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  perimetro = lado * 4;
  return perimetro;
}


function areaDelTriangulo (base = 15, altura = 8){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
area = (base * altura ) / 2;
return area;
}


function deEuroAdolar(euro = 50, dolar = 1.20){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  exchange = euro * dolar;
  return exchange;
}


function esVocal(_args, [_letra= "e"] , [_letra= "es"]) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (_letra == "A" || "E" || "I" || "O" || "U" || "a" || "e" || "i" || "o" || "u") {
    return "Es vocal";
  } else if (_letra.length > 1) {
    return "dato incorrecto";
  } else
    return "dato incorrecto";

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
