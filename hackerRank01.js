//*01 Suma dos elementos
//? suma dos elementos a y b en la funcion llamada suma
function sumaDosElementos(a, b) {
    return a + b}
const a = 10;
const b = 10; 
const resultSuma = (sumaDosElementos(a,b))
console.log(resultSuma)

///////////////////////////////////////////////////////////////////////////////////////
//*02 la suma de todos los elementos del array
//? suma todos los numeros que hay en el interior del array
// ar=[1,2,3,4,5,5] = 20
function sumaArray(ar) {
    let suma = 0;
    for (let i = 0; i < ar.length; i++) {
        suma += ar[i];
    }
    return suma;
}
const ar = [1, 2, 3, 4, 5, 5];
const resultadoSumaArray = (sumaArray(ar));
console.log(resultadoSumaArray)

////////////////////////////////////////////////////////////////////////////////////////
//*03 Compara los tripletes,
//? comparar los tripletes de dos alumnos a=[4,2,3] b=[3,3,1] resultado [1,1]
//? Estas son las condiciones:
// if a[i] > b[i]  entonces el jugador 1 tiene un punto;
// if a[i] < b[i]  entonces el jugador 2 tiene un punto;
// if a[i] = b[i] entonces ninun jugador obtiene un punto.
//Me debe retornar un nuevo arreglo en la primera posicion los puintos a favor del jugador uno y en la segunda posicion los puntos a favor del jugador dos. Lo ideal es hacer un ciclo for para que recorra el arreglo a y lo compare con el en cada iteracion.
function compararTripletes(c, d) {
    let jugadorUno = 0;
    let jugadorDos = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] > d[i]) {
            jugadorUno++;
        } else if (c[i] < d[i]) {
            jugadorDos++
        }
    }
    return [jugadorUno, jugadorDos]
}
const c = [4, 2, 3];
const d = [3, 3, 1];
const resultadoTripletes = compararTripletes(c, d);
console.log (resultadoTripletes)

//*EJercicio Extra
//Hacer una funcion que me muestre en un arreglo la diferencia de puntos que tuvo el jugador uno y el jugador dos
function diferenciaPuntaje(e, f) {
    let diferencia = [];
    for (let i = 0; i < e.length; i++) {
        let dif = e[i] - f[i];
        diferencia.push (dif)
    }
    return diferencia
}
const e = [4, 2, 3]; 
const f = [3, 3, 1];
const resultadoDiferencia = diferenciaPuntaje(e, f);
console.log(resultadoDiferencia)

/////////////////////////////////////////////////////////////////////////
//*04 calcular e imprimir la suma de las elementos de un array
// ar = [1000000001,1000000002, 1000000003, 1000000004, 1000000005]; = 5000000015

function sumaGrande(big) {
    let suma = 0;
    for (let i = 0; i < big.length; i++) {
        suma += big[i]
    }
    return suma
}
const big = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
console.log(sumaGrande(big))

//!Extras.
//*1 Dado un número base y un número exponente (Math.pow), escribe una función que calcule el logaritmo de la base en el exponente.
function exponente(bas, exp) {
    return Math.pow(bas,exp)
}
const bas = 5;
const exp = 2;
console.log(exponente(bas, exp))

//*2 Escribe una función que tome un arreglo de números y calcule el número elevado a la 2. Devuelve un arreglo con los resultados.
function arreglosElevados(arreglos) {
    let elevados = []
    for (let i = 0; i < arreglos.length; i++) {
        let ele = Math.pow(arreglos[i], 2)
        elevados.push(ele)
    }
    return elevados
}
const arreglos = [1, 2, 3, 4, 5];
const resultadoArregloElevado = (arreglosElevados(arreglos))
console.log(resultadoArregloElevado)

//*3  Escribe una función que tome un número y calcule el logaritmo natural (base e) de ese número.
function logaritmoNatural(e) {
     return Math.log(e)
}
console.log(logaritmoNatural(10))

//*4 Escribe una función que tome dos números y calcule el logaritmo de uno en base del otro.

function logaritmoNaturalDos(f, g) {
    return Math.log(f) / Math.log(g)
    
}
console.log(logaritmoNaturalDos(8, 2))
console.log(logaritmoNaturalDos(12, 2))
console.log(logaritmoNaturalDos(4, 2))
console.log(logaritmoNaturalDos(5, 2))

//2e3 = 8 || 2*2*2 = 8

//*5 Escribe una función que tome dos arreglos de números y devuelva un nuevo arreglo con los logaritmos de los elementos del primer arreglo en base a los elementos correspondientes del segundo arreglo.

function logaritmosArreglos(h, j) {
    let logaritmos = [];
    for (let i = 0; i < h.length; i++) {
        let res = Math.log(h[i]) / Math.log(j[i]);
        logaritmos.push(res);
    }
    return logaritmos
}
const h = [8, 12, 4, 5];
const j = [2, 2, 2, 2];
const resultadoLogaritmosArr = (logaritmosArreglos(h, j));
console.log(resultadoLogaritmosArr)
