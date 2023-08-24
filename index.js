//Ejercicios Basicos:

// 1.Programa que pida dos numeros y que nos diga cual es el mayor,el menor y si son iguales.

// let num1 = parseInt(prompt("Dime un num"));
// let num2 = parseInt(prompt("dime otro num"));
// if (num1 < num2) {
//   console.log(num2 + "es mayor");
// } else if (num1 > num2) {
//   console.log(num2 + "es menor");
// } else {
//   console.log("son iguales");
// }

// 2.Al programa anterior,si los numeros no son numeros o son menores o iguales a cero ,nos lo vuelva a pedir.(bucle)
// let num1 = "";
// let num2 = "";
// do {
//   //ejecuta 1 primera vez
//   num1 = prompt("Dime un num");
//   num2 = prompt("dime otro num");
//   if (num1 < num2) {
//     console.log(num2 + "es mayor");
//   } else if (num1 > num2) {
//     console.log(num2 + "es menor");
//   } else {
//     console.log("son iguales");
//   }
// } while (
//   num1 <= 0 ||
//   num2 <= 0 ||
//   typeof num1 != "number" ||
//   typeof num2 != "number"
// ); //mientras la condicion es verdadera vuelve a preguntar

//3.Utilizando un bucle , mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado.
//utilizo while porque necesito que se repita hasta que la condicion sea verdadera

// let num = "";
// let x = 0;
// do {
//   num = parseInt(prompt("introduzca numero"));
//   x = x + num;
// } while (num > 0);
// console.log(x);

// 4.Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario

// let num1 = parseInt(prompt("introduzca el primer numero"));
// let num2 = parseInt(prompt("introduzca el segundo numero"));
// for (let i = num1; i < num2; i++) {
//   console.log(i);
// }
//se puede hacer tambien de la siguiente manera

// while (num1 < num2) {
//   num1++;
// }

// 5.Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario.
// let num1 = parseInt(prompt("introduzca el primer numero"));
// let num2 = parseInt(prompt("introduzca el segundo numero"));
// for (let i = num1; i < num2; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

//6. Muestre todos los numeros divisores de un numero que mete en prompt
// let num5 = parseInt(prompt("introduzca un numero"));
// for (let i = 0; i < num5; i++) {
//   if (num5 % i === 0) {
//     console.log(i);
//   }
// }

// 7.Programa que nos diga si un numero es par o impar.
// 7.1 Ventana prompt
// 7.2 si no es valido que nos pida de nuevo el numero.

// let num6 = "";
// do {
//   num6 = parseInt(prompt("introduzca un numero"));
//   console.log(Number.isNaN(num6));
// } while (Number.isNaN(num6));
// if (num6 % 2 === 0) {
//   console.log("es par");
// } else {
//   console.log("es impar");
// }

// 8.Tabla de multiplicar de un numero introducido por pantalla.

// let numero = parseInt(prompt("Ingrese un numero para multiplicar"));
// let multiplicacion = 0;
// for (let i = 0; i <= 10; i++) {
//   multiplicacion = i * numero;
//   console.log(multiplicacion);
// }

// 9.calculadora que: -pida dos numeros por pantalla,
// -si metemos uno mal que nos lo vuelva a pedir,
// -en el cuerpo de la pagina,en una alerta y por la consola el resultado de sumar ,restar,multiplicar y dividir esas dos cifras,
// -refactoriza el codigo para encapsularlo todo en funciones reutilizables.

// let num1 = "";
// let num2 = "";
// do {
//   num1 = parseInt(prompt("introduzca el primer numero"));
//   num2 = parseInt(prompt("introduzca el segundo numero"));
// } while (Number.isNaN(num1, num2));

// let sumar = num1 + num2;
// console.log(sumar);
// let restar = num1 - num2;
// console.log(restar);
// let dividir = num1 / num2;
// console.log(dividir);
// let multiplicar = num1 * num2;
// console.log(multiplicar);

// alert(
//   "Los resultados de sus operaciones son" +
//     sumar +
//     "," +
//     restar +
//     "," +
//     dividir +
//     "," +
//     multiplicar
// );

//refactorizacion del codigo para ponerlo en funciones

// let num1 = "";
// let num2 = "";
// do {
//   num1 = parseInt(prompt("introduzca el primer numero"));
//   num2 = parseInt(prompt("introduzca el segundo numero"));
// } while (Number.isNaN(num1, num2));
// function sumar(num1, num2) {
//   return num1 + num2;
// }
// function restar(num1, num2) {
//   return num1 - num2;
// }
// function multiplicar(num1, num2) {
//   return num1 * num2;
// }
// function dividir(num1, num2) {
//   return num1 / num2;
// }
// console.log(sumar(num1, num2));
// console.log(restar(num1, num2));
// console.log(multiplicar(num1, num2));
// console.log(dividir(num1, num2));

// 10.Programa que pida 6 numeros por pantalla y los meta en un Array.

// //Primera Forma de resolverlo
// let num1 = parseInt(prompt("introduzca el 1 numero"));
// let num2 = parseInt(prompt("introduzca el 2 numero"));
// let num3 = parseInt(prompt("introduzca el 3 numero"));
// let num4 = parseInt(prompt("introduzca el 4 numero"));
// let num5 = parseInt(prompt("introduzca el 5 numero"));
// let num6 = parseInt(prompt("introduzca el 6 numero"));
// const array1 = [num1, num2, num3, num4, num5, num6];
// console.log(array1);

//segunda forma de resolverlo
// let num = "";
// let array2 = [];
// for (let i = 0; i < 6; i++) {
//   num = parseInt(prompt("introduzca un numero"));
//   array2.push(num); //agrega elementos al final
// }
// console.log(array2);

// 11.Mostrar el array anterior entero(todos sus elementos) en el cuerpo de la pagina y en la consola(usando funciones).

// function mostrar() {
//   let num = "";
//   let array2 = [];
//   for (let i = 0; i < 6; i++) {
//     num = parseInt(prompt("introduzca un numero"));
//     array2.push(num); //agrega elementos al final
//   }
//   return array2;
// }
// console.log(mostrar());
// document.write(mostrar());

// 12.Ordenar el array anterior  mostrarlo

// let num = "";
// let array2 = [];
// for (let i = 0; i < 6; i++) {
//   num = parseInt(prompt("introduzca un numero"));
//   array2.push(num); //agrega elementos al final
// }
// console.log(array2);
// console.log(array2.sort());

// 14. Mostrar cuantos elementos tiene el array anterior.
// console.log(array2.length);

// 15.Busqueda de un valor introducido por el usuario,que nos diga si lo encuentra en el array o no.
// console.log(array2.includes(2));

// sacar el promedio de tres notas y mostrar un mensaje si Aprobó o Réprobo

// let nota = "";
// let suma = 0;
// let promedio = 0;
// for (let i = 0; i < 3; i++) {
//   nota = parseInt(prompt("Digame su  nota del " + " cuatrimestre"));
//   suma = suma + nota;
// }
// promedio = suma / 3;
// console.log(promedio);

// if (promedio >= 6) {
//   console.log("aprobaste la materia!");
// } else {
//   console.log("desaprobaste");
// }

// Ejercicios de Logica de Programacion:(de jonmircha)

//EJERCICIOS DE ARRAY:
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, ejemplo: miFuncion("Hola Mundo") devolverá 10.

// let texto = "Hola Mundo";
// console.log(texto.length);

// function contar(cadena) {
//   let texto;
//   texto = cadena;
//   console.log(texto.length);
// }
// let cadena = "hola mundo";
// contar(cadena);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// function cortar(cadena, longitud) {
//   texto = cadena;
//   console.log(texto.slice(0, longitud));
// }
// let cadena = "hola mundo";
// cortar(cadena, 4);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// function separar(cadena, caracter) {
//   caract = caracter;
//   let texto;
//   texto = cadena;
//   console.log(texto.split([caracter]));
// }
// separar("hola que tal", " ");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// function repetir(cadena, veces) {
//   for (let i = 0; i < veces; i++) {
//     texto = cadena;
//     document.write(cadena);
//   }
// }
// repetir("hola mundo", 3);

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// const invertir = (cadena) => {
//   texto = cadena;
//   separarCadena = cadena.split(""); //separo
//   invertirArrayArmado = separarCadena.reverse(""); //escribo al reves
//   unirArray = invertirArrayArmado.join(""); //une
//   return unirArray;
// };

// let cadena = "hola mundo";
// console.log(invertir(cadena));

// segunda opcion:
// function invertirCadena(cadena) {
//   return cadena.split("").reverse().join("");
// }
// console.log(invertirCadena("hola mundo"));

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// const contar = (cadena, palabra) => {
//   let i = 0;
//   let contador = 0;
//   // El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
//   while (i !== -1) {
//     i = cadena.indexOf(palabra, i);
//     if (i !== -1) {
//       i++;
//       contador++;
//     }
//   }
//   return console.log(contador);
// };

// cadena = "hola mundo adios mundo";
// palabra = "mundo";
// contar(cadena, palabra);

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// const palindromo = (cadena) => {
//   cadena = cadena.toLowerCase();
//   separarCadena = cadena.split("").reverse().join("");
//   if (cadena === separarCadena) {
//     console.log("son iguales");
//   } else {
//     console.log("no son iguales");
//   }
// };
// palindromo("Salas");
// palindromo("Sol");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5

// const eliminar = (texto, patron) => {
//   separar = texto.split(patron); //quita solo el patron
//   console.log(separar);
//   juntar = separar.join(""); //junta el resto
//   console.log(juntar); //muestra el texto sinel patron
// };
// eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// function aleatorio(min, max) {
//   min = Math.ceil(min);//devuelve el entero mayor o igual más próximo a un número dado.
//   max = Math.floor(max);//Devuelve el máximo entero menor o igual a un número
//   return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(aleatorio(501,600));
// console.log(aleatorio(501,600));

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

// function capicua(num){
// num=num.toString();
// console.log(num);
// return num.split("").reverse().join("") ===num;
// }

// console.log(capicua(812));
// console.log(capicua(8118));

// 11) Programa una función que calcule el factorial de un número 
// (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

// const primo=(num)=>{
// return num % num === 0 && num % 1 === 0 && num % 2 ==! 0
// }
// console.log(primo(7));
// console.log(primo(8));
// console.log(primo(11));

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

// const esParoImpar=(num)=>{
// if(num%2===0){
// console.log("es par")
// }else{
//   console.log("es impar")
// }
// }
// esParoImpar(29);
// esParoImpar(10);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

// function grados(grado,tipo){
// if(tipo==="C"){
//   celsius=grado * 1.8 + 32;
//   return celsius + "°F"
// }else{
//   fahrenheit=grado -32 * 0.555;
//   return fahrenheit + "°C";
// }
// }
// console.log(grados(0,"f"));
// console.log(grados(0,"C"));

 