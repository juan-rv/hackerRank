//*01 Suma dos elementos
//? suma dos elementos a y b en la funcion llamada suma
function suma(a, b) {
    return a+b
}
const a = 10;
const b = 20;
const resultado = suma(a, b)
console.log(resultado)
///////////////////////////////////////////////////////////////////////////////////////
//*02 la suma de todos los elementos del array
//? suma todos los numeros que hay en el interior del array
// ar=[1,2,3,4,5,5] = 20
function sumaArray(ar) {
    ar = [1, 2, 3, 4, 5, 5];
    let suma = 0;
    for (let i = 0; i < ar.length; i++) {
        suma += ar[i]
    }
    return suma
} 
console.log(sumaArray())
////////////////////////////////////////////////////////////////////////////////////////
//*03 Compara los tripletes,
//? comparar los tripletes de dos alumnos a=[1,2,3] b=[3,2,1]
//? Estas son las condiciones:
// if a[i] > b[i]  entonces el jugador 1 tiene un punto;
// if a[i] < b[i]  entonces el jugador 2 tiene un punto;
// if a[i] = b[i] entonces ninun jugador obtiene un punto.

//Me debe retornar un nuevo arreglo en la primera posicion los puintos a favor del jugador uno y en la segunda posicion los puntos a favor del jugador dos

//Lo ideal es hacer un ciclo for para que recorra el arreglo a y lo compare con el en cada iteracion.

function compararTripletes(a, b) {
    a = [17, 12, 3];
    b = [3, 2, 11];

    let jugador1 = 0;
    let jugador2 = 0;

    for (let i = 0; i < b.length; i++)
        if(a[i] > b[i]){ 
            jugador1++
        } else if (a[i] < b[i]) {
            jugador2 ++
        }
    return[jugador1, jugador2]
    
}

console.log(compararTripletes())

//*EJercicio Extra
//Hacer una funcion que me muestre en un arreglo la diferencia de puntos que tuvo el jugador uno y el jugador dos

function diferencia(c, d) {
    let diferences = [] // arreglo donde se van a agregar las diferencias
    for (let i = 0; i < c.length; i++) {
        let diff = c[i] - d[i];
        diferences.push(diff); //aca se van a ir agregando cada una de las diferencias de puntaje por cada iteracion hecha

        //!En caso de querer que el resultado de los numeros salga en positivo se debe de incluir el siguiente metodo 
        //diferences.push(Math.abs(diff));
    }
    return [diferences]
}
const c = [23, 43, 50];
const d = [25, 50, 40];
const resul = diferencia(c, d);
console.log(resul)
