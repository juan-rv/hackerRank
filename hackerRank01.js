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
